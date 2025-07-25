import { useEffect, useRef } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

const VideoRoom = () => {
  const { roomId } = useParams()
  const [searchParams] = useSearchParams()
  const userName = searchParams.get('username')
  const meetingRef = useRef(null)
  const isInitialized = useRef(false)

  useEffect(() => {
    if (isInitialized.current) return
    isInitialized.current = true

    const initializeMeeting = async () => {
      const appID = 680160827
      const serverSecret = "e147b9efb61548a155f9877c66b00e49"

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        Date.now().toString(),
        userName || 'User'
      )

      const zp = ZegoUIKitPrebuilt.create(kitToken)

      zp.joinRoom({
        container: meetingRef.current,
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
        showPreJoinView: true,
        sharedLinks: [
          {
            name: 'Copy link',
            url: `${window.location.origin}/room/${roomId}?username=${userName}`,
          },
        ],
        turnOnMicrophoneWhenJoining: true,
        turnOnCameraWhenJoining: true,
        showLeaveRoomConfirmDialog: true,
        whiteboardConfig: {
          showAddImageButton: true,
        },
      })
    }

    initializeMeeting()
  }, [roomId, userName])

  return (
    <div className="relative w-screen h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20"></div>
        <div
          className="absolute top-0 left-0 w-full h-full bg-repeat opacity-30"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'0.05\\'%3E%3Ccircle cx=\\'7\\' cy=\\'7\\' r=\\'1\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          }}
        ></div>
      </div>

      {/* Video call container */}
      <div
        ref={meetingRef}
        className="relative z-10 w-full h-full rounded-xl shadow-2xl overflow-hidden"
      />

      {/* Live badge */}
      <div className="absolute top-4 right-4 z-20 flex items-center bg-green-600 text-white px-4 py-1 rounded-full text-sm shadow-lg animate-pulse">
        <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
        Live Debate
      </div>
    </div>
  )
}

export default VideoRoom
