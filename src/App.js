import './App.css';
import Header from './components/Header';
import React from 'react';
import TinderCard from './components/tinderCards';
import SwipeButtons from './components/swipeButtons';

function App() {
  return (
    //BEM class naming convention
    <div className="App">
      <Header />
      <TinderCard />
      <SwipeButtons />
    </div>
  );
}

export default App;
