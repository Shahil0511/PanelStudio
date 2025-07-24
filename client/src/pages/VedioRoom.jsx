import { useEffect, useRef } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

const VideoRoom = () => {
    const { roomId } = useParams()
    const [searchParams] = useSearchParams()
    const userName = searchParams.get('username')
    const meetingRef = useRef(null)

    useEffect(() => {
        const initializeMeeting = async () => {
            // Replace these with your actual ZegoCloud credentials
           const appID = 680160827
            const serverSecret = "e147b9efb61548a155f9877c66b00e49"
            
            // For local testing, we'll use test mode
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
                    mode: ZegoUIKitPrebuilt.OneONoneCall, // Better for 1-to-1 calls
                },
                showPreJoinView: true, // Let users check devices before joining
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
        <div style={{
            width: '100vw',
            height: '100vh',
        }}>
            <div 
                ref={meetingRef}
                style={{
                    width: '100%',
                    height: '100%',
                }}
            />
        </div>
    )
}

export default VideoRoom