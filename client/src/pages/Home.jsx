import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const [roomId, setRoomId] = useState("")
    const [userName, setUserName] = useState("")
    const navigate = useNavigate()

    const handleJoin = () => {
        if (!roomId.trim()) return alert("Please enter a room ID")
        if (!userName.trim()) return alert("Please enter your name")
        navigate(`/room/${roomId}`)
    }
    
    // Function to generate a simple room ID
    const generateRoomId = () => {
        const id = Math.random().toString(36).substring(2, 8)
        setRoomId(id)
    }

    return (
        <div style={styles.container}>
            <div style={styles.form}>
                <h1 style={styles.heading}>Local Network Video Call</h1>
                
                <input 
                    style={styles.input}
                    type="text" 
                    placeholder='Your Name'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                
                <div style={styles.roomIdContainer}>
                    <input 
                        style={styles.input}
                        type="text" 
                        placeholder='Room ID' 
                        value={roomId}
                        onChange={(e) => setRoomId(e.target.value)}
                    />
                    <button style={styles.generateButton} onClick={generateRoomId}>
                        Generate ID
                    </button>
                </div>
                
                <button style={styles.button} onClick={handleJoin}>
                    Join Room
                </button>
                
                <div style={styles.localNetworkInfo}>
                    <h3>Local Network Setup:</h3>
                    <p>1. Make sure both devices are on the same WiFi</p>
                    <p>2. Use this IP on mobile: {window.location.hostname}</p>
                    <p>3. Enter the same Room ID on both devices</p>
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '30px',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        width: '90%',
        maxWidth: '400px',
    },
    heading: {
        margin: '0 0 20px 0',
        textAlign: 'center',
        color: '#333',
    },
    input: {
        padding: '12px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        fontSize: '16px',
        width: '100%',
    },
    button: {
        padding: '12px',
        backgroundColor: '#4a76a8',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s',
        width: '100%',
    },
    generateButton: {
        padding: '12px',
        backgroundColor: '#6c757d',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '14px',
        whiteSpace: 'nowrap',
    },
    roomIdContainer: {
        display: 'flex',
        gap: '10px',
    },
    localNetworkInfo: {
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#f8f9fa',
        borderRadius: '5px',
        fontSize: '14px',
    }
}

export default Home