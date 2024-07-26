import '../Components/Chat_page.css';
import React, { useEffect, useRef, useState } from 'react';
import MicIcon from '@mui/icons-material/Mic';
import DownloadIcon from '@mui/icons-material/Download';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import AvatarDisplay from './AvatarDisplay';
import { CSVLink } from 'react-csv';

const apiUrl = 'http://localhost:5000';

function Chat_page() {
    const [userInput, setUserInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [isListening, setIsListening] = useState(false); // State to track microphone status
    const [isSpeaking, setIsSpeaking] = useState(false); // State to track text-to-speech status
    const [micColor, setMicColor] = useState('rgb(92 165 223)'); // State to track microphone icon color

    const [autoMic, setAutoMic] = useState(false);

    const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition(); // Initialize SpeechRecognition hook

    const speak = (text) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.onstart = () => {
            setIsSpeaking(true); // Set isSpeaking to true when speech starts
        };
        utterance.onend = () => {
            setIsSpeaking(false); // Set isSpeaking to false when speech ends
            document.getElementById('user-input').disabled = false; // Enable textarea after speech ends
            setTimeout(() => autoMic && SpeechRecognition.startListening(), 500);
        };
        window.speechSynthesis.speak(utterance);
    };

    useEffect(() => {
        console.log("use effect called");
        fetch(apiUrl + "/chat/get-init-message", {
            method: 'GET'
        })
            .then(res => res.text())
            .then(text => {
                setMessages([...messages, { author: 'HR', message: text }])
                speak(text);
            });
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
                .then(text => {
                    setMessages([...messages, userMsg, { author: 'HR', message: text }]);
                    speak(text); // Speak the response
                });

            setUserInput('');
            document.getElementById('user-input').disabled = true; // Disable textarea while speaking
        }
    };

    const toggleDarkMode = () => {
        const htmlTag = document.getElementById('html-tag');
        htmlTag.classList.toggle('dark-mode');
    };

    const handleMicIconClick = () => {
        if (listening) {
            setAutoMic(false);
            setMicColor('rgb(92 165 223)');
            SpeechRecognition.stopListening();
            // Automatically submit the message when the microphone stops listening
        } else {
            setAutoMic(true);
            setMicColor('red');
            setTimeout(() => { // Delay microphone activation by 2 seconds
                SpeechRecognition.startListening();
            }, 2000);
        }
        setIsListening(!listening); // Toggle microphone status
    };

    useEffect(() => {
        if (!listening) {
            handleSubmit();
        }
    }, [listening]);

    const msgRef = useRef();

    useEffect(() => {
        msgRef.current.lastElementChild?.scrollIntoView({ block: 'start' })
    }, [messages]);

    return (
        <div className="MAIN" style={{marginLeft:'20%',marginRight:'20%'}}>
            <div className="img-position">
                <AvatarDisplay isTalking={isSpeaking} className="avatar" />
            </div>
            <div>
                <button className="toggle-btn" onClick={toggleDarkMode}>
                    <i className="fas fa-adjust"></i>
                </button>

                <div className="chat-container">
                    <div className="chat-messages" id="chat-messages">
                        <div ref={msgRef}>
                            {messages.map((msg, index) => <div key={index} className='message-container'>
                                <div className={msg.author == 'HR' ? "message bot-message" : "request message-style"}>{msg.message}</div>
                            </div>)}
                        </div>
                    </div>
                    <form className="chat-form" id="chat-form" onSubmit={handleSubmit}>
                        <CSVLink data={messages} filename='HR_Interview' className='chat-button'><DownloadIcon /> CSV</CSVLink>
                        <textarea
                            id="user-input"
                            value={userInput}
                            onChange={handleTextareaChange}
                            onKeyDown={handleTextareaKeyDown}
                            placeholder="Type your message..."
                            style={{
                                borderRadius: '10px',
                                padding: '10px',
                                width: 'calc(100% - 40px)',
                                fontSize: '17px',
                                pointerEvents: isSpeaking ? 'none' : 'auto', // Disable pointer events when speaking
                                opacity: isSpeaking ? 0.5 : 1 // Reduce opacity when speaking
                            }}
                        />
                        {browserSupportsSpeechRecognition && <button type="button" onClick={handleMicIconClick} disabled={isSpeaking} style={{ background: listening ? 'red' : 'rgb(92 165 223)', border: 'none', cursor: 'pointer', borderRadius: '9999px', pointerEvents: isSpeaking ? 'none' : 'auto', aspectRatio: '1 / 1' }}
                        className='chat-button'>
                            <MicIcon style={{ fontSize: '24px' }} />
                        </button>}
                        <input type="submit" value="Send" className='chat-button' />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Chat_page;
