import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Header } from "../components/Header"
import { InputField } from "../components/Input"
import { NetworkInfo } from "../components/NetworkInfo"
import { RoomIdSection } from "../components/RoomId"


const Home = () => {
  const [roomId, setRoomId] = useState("")
  const [userName, setUserName] = useState("")
  const navigate = useNavigate()

  const handleJoin = () => {
    if (!roomId.trim()) return alert("Please enter a room ID")
    if (!userName.trim()) return alert("Please enter your name")
    // Add username as URL parameter
    navigate(`/room/${roomId}?username=${encodeURIComponent(userName)}`)
  }

  const generateRoomId = () => {
    const id = Math.random().toString(36).substring(2, 8)
    setRoomId(id)
  
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-repeat opacity-30" 
             style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md">
          <Header />
          
          {/* Main Form Card */}
          <div className="bg-white backdrop-blur-lg border border-gray-700 rounded-2xl p-8 shadow-2xl">
            <div className="space-y-6">
              {/* Name Input */}
              <InputField
                label="Presenter Name"
                placeholder="Enter your name"
                value={userName}
                onChange={setUserName}
                icon={
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                }
              />

              {/* Room ID Section */}
              <RoomIdSection 
                roomId={roomId}
                setRoomId={setRoomId}
                generateRoomId={generateRoomId}
              />

              {/* Join Button */}
              <button
                onClick={handleJoin}
                className="w-full py-4 bg-gradient-to-r from-green-400 to-green-700 text-white rounded-lg hover:from-green-500 hover:to-green-600 transition-all duration-200 font-bold text-lg shadow-lg transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
                <span>JOIN LIVE DEBATE</span>
              </button>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-400 to-green-700 p-3 rounded-full mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <p className="text-xs text-gray-900">HD Video</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-400 to-green-700 p-3 rounded-full mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
                    </svg>
                  </div>
                  <p className="text-xs text-gray-900">Clear Audio</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-400 to-green-700 p-3 rounded-full mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                    </svg>
                  </div>
                  <p className="text-xs text-gray-900">Secure</p>
                </div>
              </div>
            </div>
          </div>

          {/* Network Info */}
          <div className="mt-6">
            <NetworkInfo />
          </div>

          {/* Footer */}
          <div className="text-center mt-6 text-gray-500 text-sm">
            <p>© 2025 Pioneer Ventures - Professional Broadcasting Platform</p>
            <p className="mt-1">Connecting journalists worldwide</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home