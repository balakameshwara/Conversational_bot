import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import { FaPaperPlane } from 'react-icons/fa';
import ChatBubble from './components/ChatBubble';
import axios from 'axios';
import './index.css';

function App() {
  const [inputVal, setInputVal] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! I am your friendly AI companion. How can I help you today?" }
  ]);
  const [loading, setLoading] = useState(false);
  const endOfMessagesRef = useRef(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputVal.trim() || loading) return;

    const userMessage = inputVal;
    setInputVal("");
    
    // Add user message to history
    const newHistory = [...messages, { role: "user", content: userMessage }];
    setMessages(newHistory);
    setLoading(true);

    try {
      // Send the request. We pass history up to (but excluding) the requested message for context.
      const payload = {
        message: userMessage,
        history: messages
      };
      
      const response = await axios.post("http://localhost:8000/api/chat", payload);
      
      setMessages([...newHistory, { role: "assistant", content: response.data.response }]);
    } catch (error) {
      console.error(error);
      const errorMsg = error.response?.data?.detail || "An error occurred connecting to the backend.";
      setMessages([...newHistory, { role: "assistant", content: `❌ ${errorMsg}` }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <Container className="py-5 h-100 d-flex flex-column">
        <Row className="justify-content-center mb-4">
          <Col md={10} lg={8} className="text-center">
            <h1 className="fw-bold app-title mb-2">Antigravity AI Chat</h1>
            <p className="app-subtitle text-muted">A beautiful conversational experience powered by FastApi & React</p>
          </Col>
        </Row>
        
        <Row className="justify-content-center flex-grow-1 overflow-hidden">
          <Col md={10} lg={8} className="d-flex flex-column h-100">
            <div className="chat-window d-flex flex-column flex-grow-1 shadow-lg rounded-4 p-4 mb-4 glassmorphism">
              <div className="messages-container flex-grow-1 overflow-auto pb-3 pe-2">
                {messages.map((msg, idx) => (
                  <ChatBubble key={idx} message={msg.content} isUser={msg.role === 'user'} />
                ))}
                {loading && (
                  <div className="d-flex justify-content-start mb-4">
                    <div className="icon-container ai-icon mr-2 me-2 shadow-sm">
                      <Spinner animation="grow" size="sm" />
                    </div>
                    <div className="message-bubble typing-indicator shadow-sm p-3 ai-bubble">
                      Typing...
                    </div>
                  </div>
                )}
                <div ref={endOfMessagesRef} />
              </div>
              
              <Form className="d-flex gx-3 pt-3 border-top" onSubmit={handleSend}>
                <Form.Control 
                  className="input-glass shadow-none flex-grow-1 me-2 rounded-pill px-4"
                  type="text" 
                  placeholder="Type your message here..." 
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  disabled={loading}
                />
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="btn-glass rounded-circle shadow-sm p-3 d-flex align-items-center justify-content-center"
                  disabled={loading || !inputVal.trim()}
                >
                  <FaPaperPlane />
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
