import '../Components/Chat_page.css';
import React, { useState } from 'react';
import MicIcon from '@mui/icons-material/Mic';

function Chat_page() {
    const [userInput, setUserInput] = useState('');
    const [requests, setRequests] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userInput.trim() !== '') {
            setRequests([...requests, userInput]);
            setUserInput('');
        }
    };

    const toggleDarkMode = () => {
        const htmlTag = document.getElementById('html-tag');
        htmlTag.classList.toggle('dark-mode');
    };

    return (
        <div>
            <button className="toggle-btn" onClick={toggleDarkMode}>
                <i className="fas fa-adjust"></i>
            </button>

            <div className="chat-container">
                <div className="chat-messages" id="chat-messages">
                    <div className="img-position">
                        <img src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_640.png" alt="Avatar" className="avatar" />
                    </div><br /><br />
                    <div className="message bot-message">Hello! How can I help you?</div><br /><br />
                    <div className="request message-style">
                        {requests.map((request, index) => (
                            <div key={index}><label>{request}</label></div>
                        ))}
                    </div>
                </div>
                <form className="chat-form" id="chat-form" onSubmit={handleSubmit}>
                    <input type="text" id="user-input" value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder="Type your message..." />
                    <MicIcon />
                    <input type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
}

export default Chat_page;