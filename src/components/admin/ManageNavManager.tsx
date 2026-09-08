'use client';

import { useEffect, useMemo, useState } from 'react';
import { ArrowUp, ArrowDown, Plus, Save, X } from 'lucide-react';
import { NAV_OPTIONS, type NavigationItemData } from '@/lib/navigation';

type RowState = NavigationItemData & { temporaryId: string };

const emptyRow = (name = 'Home', href = '/', order = 0): RowState => ({
  temporaryId: `${name}-${Math.random().toString(36).slice(2,9)}`,
  id: undefined,
  name,
  href,
  visibility: true,
  kind: 'nav',
  parentId: null,
  order,
});

export default function ManageNavManager() {
  const [rows, setRows] = useState<RowState[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/navigation', { cache: 'no-store' });
        const data = await res.json();
        const mapped = Array.isArray(data) && data.length > 0
          ? data.map((item: any, index: number) => ({
              temporaryId: `${item.id ?? item.name}-${index}`,
              id: item.id,
              name: item.name,
              href: item.href ?? '/',
              visibility: item.visibility ?? true,
              kind: item.kind ?? 'nav',
              parentId: item.parentId ?? null,
              order: item.order ?? index,
            }))
          : NAV_OPTIONS.slice(0, 6).map((item, index) => emptyRow(item.name, item.href, index));

        setRows(mapped);
      } catch {
        setRows(NAV_OPTIONS.slice(0, 6).map((item, index) => emptyRow(item.name, item.href, index)));
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  const topLevelCount = useMemo(() => rows.filter((row) => row.kind === 'nav' && !row.parentId).length, [rows]);
  const addableOptions = useMemo(
    () => NAV_OPTIONS.filter((option) => !rows.some((row) => row.name === option.name)),
    [rows]
  );

  const updateRow = (temporaryId: string, updater: (item: RowState) => RowState) => {
    setRows((current) => current.map((row) => (row.temporaryId === temporaryId ? updater(row) : row)));
  };

  const addRow = () => {
    if (topLevelCount >= 6) {
      setMessage('Maximum 6 nav links reached.');
      return;
    }

    const nextOption = addableOptions[0];
    if (!nextOption) {
      setMessage('All available nav names are already in use.');
      return;
    }

    setRows((current) => [
      ...current,
      emptyRow(nextOption.name, nextOption.href, current.length),
    ]);
    setMessage('');
  };

  const moveRow = (temporaryId: string, direction: 'up' | 'down') => {
    setRows((current) => {
      const index = current.findIndex((row) => row.temporaryId === temporaryId);
      if (index === -1) return current;
      const targetIndex = direction === 'up' ? index - 1 : index + 1;
      if (targetIndex < 0 || targetIndex >= current.length) return current;
      const reordered = [...current];
      [reordered[index], reordered[targetIndex]] = [reordered[targetIndex], reordered[index]];
      return reordered.map((row, idx) => ({ ...row, order: idx }));
    });
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage('');

    try {
      const normalized = rows
        .map((row, index) => ({
          ...row,
          kind: row.kind ?? 'nav',
          href: row.href || '/',
          visibility: row.visibility ?? true,
          parentId: row.kind === 'sub' ? row.parentId : null,
          order: index,
        }))
        .filter((row) => row.name.trim().length > 0);

      const topLevel = normalized.filter((row) => row.kind === 'nav' && !row.parentId).length;
      if (topLevel > 6) {
        setMessage('Only 6 main nav links are allowed.');
        setSaving(false);
        return;
      }

      const res = await fetch('/api/navigation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: normalized }),
      });

      const result = await res.json();
      if (!res.ok || !result.success) {
        throw new Error(result.message || 'Could not save navigation.');
      }

      setMessage('Navigation updated successfully.');
      setIsOpen(false);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Something went wrong.');
    } finally {
      setSaving(false);
    }
  };

  const parentOptions = rows.filter((row) => row.kind === 'nav' && !row.parentId && row.name !== 'Home');

  if (loading) {
    return <div className="p-4 text-sm text-gray-500">Loading navigation…</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-[#002147]/60">Navigation</p>
          <h2 className="text-2xl font-bold text-[#002147]">Manage Nav</h2>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 rounded-xl bg-[#002147] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#001b3f]"
        >
          Update your nav
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4">
          <div className="w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-[#002147]">Update your nav</h3>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-gray-200 p-2 text-gray-500 hover:text-gray-800"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <h4 className="text-lg font-bold text-[#002147]">Navigation items</h4>
                  <button
                    type="button"
                    onClick={addRow}
                    className="inline-flex items-center gap-2 rounded-lg border border-[#002147] px-3 py-2 text-sm font-semibold text-[#002147] hover:bg-[#002147] hover:text-white"
                  >
                    <Plus className="h-4 w-4" />
                    Add nav
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-left">
                    <thead>
                      <tr className="border-b border-gray-200 bg-white">
                        <th className="px-3 py-3 text-xs font-bold uppercase tracking-wide text-gray-600">Nav name</th>
                        <th className="px-3 py-3 text-xs font-bold uppercase tracking-wide text-gray-600">Visibility</th>
                        <th className="px-3 py-3 text-xs font-bold uppercase tracking-wide text-gray-600">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.length === 0 && (
                        <tr>
                          <td colSpan={3} className="px-3 py-8 text-center text-gray-500">No nav items yet.</td>
                        </tr>
                      )}

                      {rows.map((row) => (
                        <tr key={row.temporaryId} className="border-b border-gray-200 bg-white align-top">
                          <td className="px-3 py-3">
                            <select
                              value={row.name}
                              onChange={(e) => {
                                const selected = NAV_OPTIONS.find((option) => option.name === e.target.value);
                                updateRow(row.temporaryId, (current) => ({
                                  ...current,
                                  name: selected?.name ?? current.name,
                                  href: selected?.href ?? current.href,
                                }));
                              }}
                              className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm"
                            >
                              {NAV_OPTIONS.map((option) => (
                                <option key={option.name} value={option.name}>{option.name}</option>
                              ))}
                            </select>
                          </td>
                          <td className="px-3 py-3">
                            <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                              <input
                                type="checkbox"
                                checked={row.visibility}
                                onChange={(e) => updateRow(row.temporaryId, (current) => ({ ...current, visibility: e.target.checked }))}
                              />
                              Visible
                            </label>
                          </td>
                          <td className="px-3 py-3">
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => moveRow(row.temporaryId, 'up')}
                                className="rounded-lg border border-gray-200 p-2 text-gray-700 hover:bg-gray-100"
                                title="Move up"
                              >
                                <ArrowUp className="h-4 w-4" />
                              </button>
                              <button
                                type="button"
                                onClick={() => moveRow(row.temporaryId, 'down')}
                                className="rounded-lg border border-gray-200 p-2 text-gray-700 hover:bg-gray-100"
                                title="Move down"
                              >
                                <ArrowDown className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <h4 className="mb-3 text-lg font-bold text-[#002147]">Move / rearrange</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-left">
                    <thead>
                      <tr className="border-b border-gray-200 bg-white">
                        <th className="px-3 py-3 text-xs font-bold uppercase tracking-wide text-gray-600">Nav name</th>
                        <th className="px-3 py-3 text-xs font-bold uppercase tracking-wide text-gray-600">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row) => (
                        <tr key={`${row.temporaryId}-rearrange`} className="border-b border-gray-200 bg-white align-top">
                          <td className="px-3 py-3 text-sm text-gray-700">{row.name}</td>
                          <td className="px-3 py-3">
                            <div className="flex flex-col gap-3">
                              <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                                <input
                                  type="radio"
                                  name={`kind-${row.temporaryId}`}
                                  checked={row.kind === 'nav'}
                                  onChange={() => updateRow(row.temporaryId, (current) => ({ ...current, kind: 'nav', parentId: null }))}
                                />
                                Make nav
                              </label>
                              <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                                <input
                                  type="radio"
                                  name={`kind-${row.temporaryId}`}
                                  checked={row.kind === 'sub'}
                                  onChange={() => updateRow(row.temporaryId, (current) => ({ ...current, kind: 'sub', parentId: parentOptions[0]?.href ?? null }))}
                                />
                                Make sub
                              </label>

                              {row.kind === 'sub' && (
                                <select
                                  value={row.parentId ?? ''}
                                  onChange={(e) => updateRow(row.temporaryId, (current) => ({ ...current, parentId: e.target.value || null }))}
                                  className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm"
                                >
                                  <option value="">Select parent nav</option>
                                  {parentOptions.map((option) => (
                                    <option key={option.temporaryId} value={option.href}>{option.name}</option>
                                  ))}
                                </select>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4 border-t border-gray-200 pt-4">
              <div className="text-sm text-gray-600">
                {topLevelCount >= 6 && <span className="text-red-600">Nav limit reached: 6 main nav links maximum.</span>}
                {message && <span className="text-red-600">{message}</span>}
              </div>
              <button
                type="button"
                onClick={handleSave}
                disabled={saving}
                className="inline-flex items-center gap-2 rounded-xl bg-[#002147] px-5 py-3 text-sm font-bold text-white hover:bg-[#001b3f] disabled:opacity-70"
              >
                <Save className="h-4 w-4" />
                {saving ? 'Saving...' : 'Save nav'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
