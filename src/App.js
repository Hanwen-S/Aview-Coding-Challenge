import React from 'react';
import './App.css';
import LeftRectangle from './LeftRect';
import RightRectangle from './RightRect';

function App() {
  return (
    <div>
      <div className="right" >
        <RightRectangle />
      </div>
      <div className="left" >
        <LeftRectangle />
      </div>
    </div>
  );
}

export default App;
