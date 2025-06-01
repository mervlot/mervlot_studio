// Import necessary hooks and styles
import { useState } from "react";
import { useSocket } from "../socket"; // Custom hook for socket communication
import "./Chat.css"; // Importing styles for the Chat component

// Chat component definition
function Chat() {
    // Destructure socket-related functions and state from the custom hook
    const { messages, privateMessages, sendMessage, sendPrivateMessage } = useSocket();

    // State for the message input field
    const [message, setMessage] = useState("");

    // State for the recipient input field (used for private messages)
    const [recipient, setRecipient] = useState("");

    // Function to handle sending public messages
    const handleSend = () => {
        if (message.trim()) { // Ensure the message is not empty
            sendMessage(message); // Send the message using the socket
            setMessage(""); // Clear the input field
        }
    };

    // Function to handle sending private messages
    const handlePrivateSend = () => {
        if (recipient.trim() && message.trim()) { // Ensure both recipient and message are not empty
            console.log(`📤 Sending Private Message to ${recipient}: ${message}`);
            sendPrivateMessage(recipient, message); // Send the private message using the socket
            setMessage(""); // Clear the input field
        } else {
            console.log("⚠️ Recipient or message is empty!"); // Log a warning if inputs are invalid
        }
    };

    // Render the chat interface
    return (
        <div className="mainChat items-center self-center text-center ">
            <h3 className="head ">Chat</h3>
            {/* Display public messages */}
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>
                        <strong>{msg.username}:</strong> {msg.text}
                    </li>
                ))}
            </ul>

            <h3>Private Messages</h3>
            {/* Display private messages */}
            <ul>
                {privateMessages.map((msg, index) => (
                    <li key={index} style={{ color: "red" }}>
                        <strong>{msg.sender ? `${msg.sender} (Private):` : "Unknown Sender (Private):"}</strong> {msg.text}
                    </li>
                ))}
            </ul>

            {/* Input field for public messages */}
            <input className=" "
                type="text" 
                placeholder="Enter message" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
            />
            <button onClick={handleSend}>Send Public</button>

            <br />

            {/* Input field for recipient username (private messages) */}
            <input 
                type="text" 
                placeholder="Recipient username" 
                value={recipient} 
                onChange={(e) => setRecipient(e.target.value)} 
            />
            <button onClick={handlePrivateSend}>Send Private</button>
        </div>
    );
}

// Export the Chat component for use in other parts of the application
export default Chat;
