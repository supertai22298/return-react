import React from 'react';
import LoginControl from './7.ConditionalRendering/LoginControl';
import Mailbox from './7.ConditionalRendering/Mailbox';
import './App.css';
function App() {
  const messages = ['tai ơi', 'cái chi rứa', 'con ku']
  return (
    <div className="App">
      <LoginControl/>
      <Mailbox unreadMessages={messages}/>
    </div>
  );
}
export default App;
