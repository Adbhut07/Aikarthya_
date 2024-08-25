import React, { useState } from 'react';
import { FaInbox, FaSearch, FaPaperPlane, FaTrash, FaReply, FaTimes, FaUser, FaCog, FaSignOutAlt, FaStar, FaPaperclip, FaExclamationCircle } from 'react-icons/fa';
import SideBar from './SideBar';
const mockMessages = [
  { id: 1, sender: 'John Doe', subject: 'Research Proposal', content: 'Hello, I would like to discuss the research proposal...', date: '2024-08-25', read: true },
  { id: 2, sender: 'Jane Smith', subject: 'Conference Invitation', content: 'We are pleased to invite you to speak at our upcoming conference...', date: '2024-08-24', read: false },
  { id: 3, sender: 'Research Team', subject: 'Weekly Update', content: 'Here is the weekly update on our ongoing projects...', date: '2024-08-23', read: true },
  // Add more mock messages as needed
];

const Inbox = () => {
  const [messages, setMessages] = useState(mockMessages);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [composing, setComposing] = useState(false);
  const [newMessage, setNewMessage] = useState({ to: '', subject: '', content: '' });

  const handleMessageSelect = (message) => {
    setSelectedMessage(message);
    if (!message.read) {
      const updatedMessages = messages.map(msg => 
        msg.id === message.id ? { ...msg, read: true } : msg
      );
      setMessages(updatedMessages);
    }
  };

  const handleCompose = () => {
    setComposing(true);
    setSelectedMessage(null);
  };

  const handleSend = (e) => {
    e.preventDefault();
    console.log('Sending message:', newMessage);
    // Here you would typically send the message to your backend
    setComposing(false);
    setNewMessage({ to: '', subject: '', content: '' });
  };

  const handleDelete = (messageId) => {
    const updatedMessages = messages.filter(msg => msg.id !== messageId);
    setMessages(updatedMessages);
    setSelectedMessage(null);
  };

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Message List */}
        <div className="w-1/3 bg-white border-r overflow-y-auto">
          <div className="p-4 border-b">
            <div className="relative">
              <input
                type="text"
                placeholder="Search messages"
                className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>
          <ul>
            {messages.map((message) => (
              <li
                key={message.id}
                onClick={() => handleMessageSelect(message)}
                className={`p-4 border-b cursor-pointer hover:bg-gray-100 ${
                  message.read ? 'bg-white' : 'bg-blue-50'
                }`}
              >
                <div className="font-semibold">{message.sender}</div>
                <div className="text-sm text-gray-600">{message.subject}</div>
                <div className="text-xs text-gray-500 mt-1">{message.date}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Message Detail / Compose */}
        <div className="flex-1 p-6 overflow-y-auto">
          {selectedMessage && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">{selectedMessage.subject}</h2>
                <div>
                  <button className="text-blue-500 mr-4 hover:text-blue-700">
                    <FaReply />
                  </button>
                  <button
                    onClick={() => handleDelete(selectedMessage.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-semibold">From: </span>
                {selectedMessage.sender}
              </div>
              <div className="mb-4">
                <span className="font-semibold">Date: </span>
                {selectedMessage.date}
              </div>
              <p className="whitespace-pre-wrap">{selectedMessage.content}</p>
            </div>
          )}

          {composing && (
            <form onSubmit={handleSend} className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">New Message</h2>
                <button
                  type="button"
                  onClick={() => setComposing(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaTimes />
                </button>
              </div>
              <input
                type="email"
                placeholder="To"
                value={newMessage.to}
                onChange={(e) => setNewMessage({ ...newMessage, to: e.target.value })}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                value={newMessage.subject}
                onChange={(e) => setNewMessage({ ...newMessage, subject: e.target.value })}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
              <textarea
                placeholder="Message"
                value={newMessage.content}
                onChange={(e) => setNewMessage({ ...newMessage, content: e.target.value })}
                className="w-full p-2 border rounded h-64 resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Send <FaPaperPlane className="inline ml-2" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Inbox;