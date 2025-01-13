/* eslint-disable */
import React, { useState } from 'react';

// js
import IntroSheet from './IntroSheet.js';
import MainSheet from './MainSheet.js';

// css
import './App.css';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div>
      {showIntro ? <IntroSheet setShowIntro={setShowIntro}/> : <MainSheet/>}
    </div>
  );
}

export default App;
