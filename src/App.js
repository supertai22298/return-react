import React from 'react';
import NumberList from './8.ListsAndKeys/NumberList';
import './App.css';
function App() {
  const messages = ['Mua bánh', 'Uống nước']
  return (
    <div className="App">
      <NumberList numbers={messages}/>
    </div>
  );
}
export default App;
