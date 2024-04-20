import '../Components/Chat_page.css';
import React, { useEffect, useState } from 'react';
import MicIcon from '@mui/icons-material/Mic';

// const apiUrl = process.env.REACT_APP_API_URL;
const apiUrl = 'http://localhost:5000';

function Chat_page() {
    const [userInput, setUserInput] = useState('');
    const [requests, setRequests] = useState([]);
    const [botMessage, setBotMessage] = useState("");

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        console.log("use effect called");
        fetch(apiUrl + "/chat/get-init-message", {
            method: 'GET'
        })
        .then(res => res.text())
        .then(text => setMessages([...messages, { author: 'bot', message: text }]));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userInput.trim() !== '') {
            // setRequests([...requests, userInput]);
            const userMsg = { author: 'user', message: userInput };
            setMessages([...messages, userMsg]);

            const data = new URLSearchParams();
            data.append('message', userInput);
            fetch(apiUrl + "/chat/send-message", {
                method: 'POST',
                body: data,
            })
            .then(res => res.text())
            .then(text => setMessages([...messages, userMsg, { author: 'bot', message: text }]));
            
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
                    <div>
                        {messages.map((msg, index) => <div key={index}>
                            <div className={msg.author == 'bot' ? "message bot-message" : "request message-style"}>{msg.message}</div>
                        </div>)}
                    </div>
                        {requests.map((request, index) => (
                            <div key={index}><label>{request}</label></div>
                        ))}
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
