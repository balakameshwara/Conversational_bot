import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaUser, FaRobot } from 'react-icons/fa';

const ChatBubble = ({ message, isUser }) => {
  return (
    <div className={`d-flex mb-4 ${isUser ? 'justify-content-end' : 'justify-content-start'}`}>
      {!isUser && (
        <div className="icon-container ai-icon mr-2 me-2 shadow-sm">
          <FaRobot />
        </div>
      )}
      <div className={`message-bubble shadow-sm p-3 ${isUser ? 'user-bubble' : 'ai-bubble'}`}>
        {message}
      </div>
      {isUser && (
        <div className="icon-container user-icon ml-2 ms-2 shadow-sm">
          <FaUser />
        </div>
      )}
    </div>
  );
};

export default ChatBubble;
