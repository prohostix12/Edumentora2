import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { defaultNavigationData, sortNavigationItems, type NavigationItemData, type NavigationKind } from '@/lib/navigation';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

function sanitizePayload(items: any[]): NavigationItemData[] {
  const mainItems = items.filter((item) => item && typeof item.name === 'string');
  const mapped: NavigationItemData[] = mainItems.map((item, index) => {
    const kind: NavigationKind = item.kind === 'sub' ? 'sub' : 'nav';

    return {
      id: typeof item.id === 'string' ? item.id : undefined,
      name: item.name.trim(),
      href: typeof item.href === 'string' ? item.href : '/',
      visibility: Boolean(item.visibility),
      kind,
      parentId: item.parentId && typeof item.parentId === 'string' ? item.parentId : null,
      order: Number.isFinite(Number(item.order)) ? Number(item.order) : index,
    };
  });

  const topLevel = mapped.filter((item) => !item.parentId);
  if (topLevel.length > 6) {
    throw new Error('Only 6 main navigation items are allowed.');
  }

  return mapped;
}

export async function GET() {
  const storedItems = await prisma.navigationItem.findMany({
    orderBy: { order: 'asc' },
  });

  if (storedItems.length === 0) {
    return NextResponse.json(defaultNavigationData);
  }

  const ordered = sortNavigationItems(storedItems as any[]).map((item) => ({
    id: item.id,
    name: item.name,
    href: item.href ?? '/',
    visibility: item.visibility,
    kind: item.kind,
    parentId: item.parentId,
    order: item.order,
  }));

  return NextResponse.json(ordered);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const items = sanitizePayload(Array.isArray(body?.items) ? body.items : []);

    await prisma.navigationItem.deleteMany({});

    if (items.length === 0) {
      await prisma.navigationItem.createMany({
        data: defaultNavigationData.map((item) => ({
          name: item.name,
          href: item.href,
          visibility: item.visibility,
          kind: item.kind,
          parentId: item.parentId ?? null,
          order: item.order,
        })),
      });
    } else {
      await prisma.navigationItem.createMany({
        data: items.map((item) => ({
          name: item.name,
          href: item.href,
          visibility: item.visibility,
          kind: item.kind,
          parentId: item.parentId ?? null,
          order: item.order,
        })),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : 'Failed to update navigation.',
      },
      { status: 400 }
    );
  }
}
