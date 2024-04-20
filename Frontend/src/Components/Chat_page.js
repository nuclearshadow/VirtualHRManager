// import '../Components/Chat_page.css';
// import React, { useEffect, useState } from 'react';
// import MicIcon from '@mui/icons-material/Mic';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// // const apiUrl = process.env.REACT_APP_API_URL;
// const apiUrl = 'http://localhost:5000';

// function Chat_page() {
//     const [userInput, setUserInput] = useState('');
//     const [messages, setMessages] = useState([]);
//     const [isListening, setIsListening] = useState(false); // State to track microphone status
//     const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition(); // Initialize SpeechRecognition hook

//     useEffect(() => {
//         console.log("use effect called");
//         fetch(apiUrl + "/chat/get-init-message", {
//             method: 'GET'
//         })
//             .then(res => res.text())
//             .then(text => setMessages([...messages, { author: 'bot', message: text }]));
//     }, []);

//     useEffect(() => {
//         setUserInput(transcript);
//     }, [transcript]);

//     const handleTextareaChange = (e) => {
//         setUserInput(e.target.value);
//     };

//     const handleTextareaKeyDown = (e) => {
//         if (e.key === 'Enter' && !e.shiftKey) {
//             e.preventDefault();
//             handleSubmit();
//         }
//     };
    

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (userInput.trim() !== '') {
//             const userMsg = { author: 'user', message: userInput };
//             setMessages([...messages, userMsg]);

//             const data = new URLSearchParams();
//             data.append('message', userInput);
//             fetch(apiUrl + "/chat/send-message", {
//                 method: 'POST',
//                 body: data,
//             })
//                 .then(res => res.text())
//                 .then(text => setMessages([...messages, userMsg, { author: 'bot', message: text }]));

//             setUserInput('');
//         }
//     };

//     const toggleDarkMode = () => {
//         const htmlTag = document.getElementById('html-tag');
//         htmlTag.classList.toggle('dark-mode');
//     };

//     const handleMicIconClick = () => {
//         if (listening) {
//             SpeechRecognition.stopListening();
//         } else {
//             SpeechRecognition.startListening();
//         }
//         setIsListening(!listening); // Toggle microphone status
//     };

//     return (
//         <div className="MAIN" style={{marginLeft:'20%',marginRight:'20%'}}>
//             <div className="img-position">
//                 <img src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_640.png" alt="Avatar" className="avatar" />
//             </div>
//             <div>
//                 <button className="toggle-btn" onClick={toggleDarkMode}>
//                     <i className="fas fa-adjust"></i>
//                 </button>

//                 <div className="chat-container">
//                     <div className="chat-messages" id="chat-messages">
//                         <div>
//                             {messages.map((msg, index) => <div key={index}>
//                                 <div className={msg.author == 'bot' ? "message bot-message" : "request message-style"}>{msg.message}</div>
//                             </div>)}
//                         </div>
//                     </div>
//                     <form className="chat-form" id="chat-form" onSubmit={handleSubmit}>
//                         <textarea
//                             id="user-input"
//                             value={userInput}
//                             onChange={handleTextareaChange}
//                             onKeyDown={handleTextareaKeyDown}
//                             placeholder="Type your message..."
//                             style={{ borderRadius: '10px', padding: '10px', width: 'calc(100% - 40px)', fontSize: '17px', marginRight:'8px' }} // Adjust width to accommodate mic icon and send button
//                         />
//                         {browserSupportsSpeechRecognition && <button type="button" onClick={handleMicIconClick} style={{ background: isListening ? 'red' : 'rgb(92 165 223)', color: '#ffffff', border: 'none', cursor: 'pointer', padding: '8px', marginRight: '5px', borderRadius: '30px' }}>
//                             <MicIcon style={{ fontSize: '24px' }} />
//                         </button>}
//                         <input type="submit" value="Send" style={{ background: 'rgb(135 217 112);', color: '#ffffff', border: 'none', cursor: 'pointer', padding: '10px', borderRadius: '10px' }} />
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Chat_page;


import '../Components/Chat_page.css';
import React, { useEffect, useState } from 'react';
import MicIcon from '@mui/icons-material/Mic';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// const apiUrl = process.env.REACT_APP_API_URL;
const apiUrl = 'http://localhost:5000';

function Chat_page() {
    const [userInput, setUserInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [isListening, setIsListening] = useState(false); // State to track microphone status
    const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition(); // Initialize SpeechRecognition hook

    useEffect(() => {
        console.log("use effect called");
        fetch(apiUrl + "/chat/get-init-message", {
            method: 'GET'
        })
            .then(res => res.text())
            .then(text => setMessages([...messages, { author: 'bot', message: text }]));
    }, []);

    useEffect(() => {
        setUserInput(transcript);
    }, [transcript]);

    const handleTextareaChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleTextareaKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e); // Pass the event object to handleSubmit if it's defined
        }
    };

    const handleSubmit = (e) => {
        if (e) {
            e.preventDefault();
        }
        if (userInput.trim() !== '') {
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

    const handleMicIconClick = () => {
        if (listening) {
            SpeechRecognition.stopListening();
        } else {
            SpeechRecognition.startListening();
        }
        setIsListening(!listening); // Toggle microphone status
    };

    return (
        <div className="MAIN" style={{marginLeft:'20%',marginRight:'20%'}}>
            <div className="img-position">
                <img src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_640.png" alt="Avatar" className="avatar" />
            </div>
            <div>
                <button className="toggle-btn" onClick={toggleDarkMode}>
                    <i className="fas fa-adjust"></i>
                </button>

                <div className="chat-container">
                    <div className="chat-messages" id="chat-messages">
                        <div>
                            {messages.map((msg, index) => <div key={index}>
                                <div className={msg.author == 'bot' ? "message bot-message" : "request message-style"}>{msg.message}</div>
                            </div>)}
                        </div>
                    </div>
                    <form className="chat-form" id="chat-form" onSubmit={handleSubmit}>
                        <textarea
                            id="user-input"
                            value={userInput}
                            onChange={handleTextareaChange}
                            onKeyDown={handleTextareaKeyDown}
                            placeholder="Type your message..."
                            style={{ borderRadius: '10px', padding: '10px', width: 'calc(100% - 40px)', fontSize: '17px', marginRight:'8px' }} // Adjust width to accommodate mic icon and send button
                        />
                        {browserSupportsSpeechRecognition && <button type="button" onClick={handleMicIconClick} style={{ background: isListening ? 'red' : 'rgb(92 165 223)', color: '#ffffff', border: 'none', cursor: 'pointer', padding: '8px', marginRight: '5px', borderRadius: '30px' }}>
                            <MicIcon style={{ fontSize: '24px' }} />
                        </button>}
                        <input type="submit" value="Send" style={{ background: 'rgb(135 217 112);', color: '#ffffff', border: 'none', cursor: 'pointer', padding: '10px', borderRadius: '10px' }} />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Chat_page;
