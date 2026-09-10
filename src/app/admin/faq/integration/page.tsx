export default function IntegrationPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#002147]">Integration</h1>
        <p className="mt-2 text-gray-600">Configure CRM connection details.</p>
      </div>

      <div className="max-w-2xl rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
        <div className="space-y-6">
          <div>
            <label htmlFor="crm-api-key" className="mb-2 block text-sm font-semibold text-gray-700">
              CRM API KEY :
            </label>
            <input
              id="crm-api-key"
              name="crmApiKey"
              type="text"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-[#002147] outline-none transition focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/10"
            />
          </div>

          <div>
            <label htmlFor="crm-endpoint-url" className="mb-2 block text-sm font-semibold text-gray-700">
              CRM Endpoint URL :
            </label>
            <input
              id="crm-endpoint-url"
              name="crmEndpointUrl"
              type="url"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-[#002147] outline-none transition focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/10"
            />
          </div>

          <button
            type="button"
            className="rounded-xl bg-[#8B0000] px-6 py-3 font-semibold text-white transition hover:bg-[#5C0000]"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
