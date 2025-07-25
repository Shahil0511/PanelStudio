


export const Header = () => (
  <div className="text-center mb-8">
    <div className="flex items-center justify-center mb-4">
      <div className="bg-red-600 p-3 rounded-full mr-3">
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM5 8a1 1 0 011-1h1a1 1 0 010 2H6a1 1 0 01-1-1zm6 1a1 1 0 100 2h3a1 1 0 100-2h-3z"/>
        </svg>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-white">
        PANEL<span className="text-red-500">STUDIO</span>
      </h1>
    </div>
    <p className="text-gray-300 text-lg">Professional News Debate Platform</p>
    <div className="flex items-center justify-center mt-2">
      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></div>
      <span className="text-red-400 font-semibold">LIVE BROADCASTING</span>
    </div>
  </div>
)