import logo from './logo.svg';
import './App.css';
import Header from './Header';
import List from './List';
import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <List />
    </div>
  );
}

export default App;
