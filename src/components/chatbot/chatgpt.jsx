import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage = {
        text: inputValue,
        sender: 'user'
      };

      setMessages([...messages, newMessage]);
      setInputValue('');

      // Call the API or perform the necessary logic to generate a response from the chatbot
      const botResponse = generateBotResponse(inputValue);
      const botMessage = {
        text: botResponse,
        sender: 'bot'
      };
      setTimeout(() => {
        setMessages([...messages, botMessage]);
      }, 1000); // Simulate a delay before receiving the bot response
    }
  };

  const generateBotResponse = (userInput) => {
    // Implement your chatbot logic here to generate the appropriate response based on the user input
    // You can use if statements, switch statements, or any other technique to handle different user inputs

    // For demonstration purposes, let's echo back the user's input
    return `You said: ${userInput}`;
  };

  return (
    <div className="chatbot">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === 'bot' ? 'bot' : 'user'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
