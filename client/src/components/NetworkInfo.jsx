export const NetworkInfo = () => (
  <div className="bg-gradient-to-r from-blue-900 to-indigo-900 p-6 rounded-lg border border-blue-700">
    <div className="flex items-center mb-4">
      <div className="bg-blue-600 p-2 rounded-full mr-3">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-blue-200">Network Setup Guide</h3>
    </div>
    <div className="space-y-3 text-blue-100">
      <div className="flex items-start">
        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
        <p>Ensure both devices are connected to the same WiFi network</p>
      </div>
      <div className="flex items-start">
        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
        <p>Mobile users: Connect using IP <span className="bg-blue-800 px-2 py-1 rounded font-mono text-sm">{window.location.hostname}</span></p>
      </div>
      <div className="flex items-start">
        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
        <p>Enter the same Room ID on both devices to connect</p>
      </div>
    </div>
  </div>
)