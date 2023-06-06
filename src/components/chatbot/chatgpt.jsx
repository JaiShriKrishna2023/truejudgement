import React, { useState } from 'react';

const ChatGPT = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleMessageSend = () => {
    if (inputText.trim() === '') {
      return;
    }

    // Add user message to the chat
    setMessages([...messages, { text: inputText, sender: 'user' }]);
    setInputText('');

    // Send user message to ChatGPT and get response
    // Replace the `YOUR_API_ENDPOINT` with the actual endpoint URL of your ChatGPT API
    fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: inputText }),
    })
      .then(response => response.json())
      .then(data => {
        // Add ChatGPT's response to the chat
        setMessages([...messages, { text: data.message, sender: 'bot' }]);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            {message.sender === 'user' ? (
              <div>User: {message.text}</div>
            ) : (
              <div>Bot: {message.text}</div>
            )}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
      />
      <button onClick={handleMessageSend}>Send</button>
    </div>
  );
};

export default ChatGPT;
