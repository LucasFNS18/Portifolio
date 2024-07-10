import React, { useState, useEffect,useLayoutEffect, useRef } from 'react';
import './Chatbot.css';
import axios from 'axios';

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Olá tudo bem? Eu sou uma IA, feita para responder todas as suas dúvidas sobre o Lucas. Pergunte quantos anos ele tem!' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/chat', { message: input });
      const botResponse = response.data.answer;
      setMessages([...newMessages, { sender: 'bot', text: botResponse }]);
    } catch (error) {
      console.error('Erro ao se comunicar com a API:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };
  


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-3xl font-bold mb-4">Fale comigo</h1>
      <h5 className="text-center text-xl mb-8">Chatbot</h5>
      <div className="flex flex-col lg:flex-row bg-customAzul rounded-2xl p-6">
        <div className="flex-1 bg-customAzul text-white p-6 rounded-l-2xl">
          <h3 className="text-xl font-bold mb-4">Azure AI Chatbot</h3>
          <p className="mb-4">
            I'm a designer and developer who creates websites and applications on YouTube. These tutorials will help you learn how to use the latest frameworks!
          </p>
          <p className="mb-8">
            Designer and developer who creates and applications on YouTube. These tutorials will help you learn how to use the latest frameworks!
          </p>
          <a href="#" className="bg-orange-500 text-white py-2 px-4 rounded-full">Download Resume</a>
        </div>
        <div className="flex-1 bg-white text-black p-6 rounded-[25px]">
          <div className="scroll-area mb-4 h-64 overflow-y-auto">
            <ul id="chat-log">
              {messages.map((message, index) => (
                <li key={index} className={`flex items-start mb-4 ${message.sender === 'user' ? 'justify-end' : ''}`}>
                  {message.sender === 'bot' && <span className="avatar bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">A</span>}
                  <div className="message bg-gray-100 p-4 rounded-lg">{message.text}</div>
                  {message.sender === 'user' && <span className="avatar bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center ml-4">C</span>}
                </li>
              ))}
              {loading && (
                <li className="flex items-start mb-4">
                  <span className="avatar bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">A</span>
                  <div className="message bg-gray-100 p-4 rounded-lg">
                    <div className="loading">
                      <div className="bounce1"></div>
                      <div className="bounce2"></div>
                      <div className="bounce3"></div>
                    </div>
                  </div>
                </li>
              )}
              <div ref={messagesEndRef} />
            </ul>
          </div>
          <div className="chat-message flex">
            <input
              type="text"
              className="flex-1 p-2 rounded-l-lg border border-gray-300"
              placeholder="Digite sua mensagem aqui..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="bg-customOrange text-white p-2 rounded-r-lg" onClick={handleSend}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
