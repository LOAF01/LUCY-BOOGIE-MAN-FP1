/* eslint-disable */
import { useRef, useEffect, useState } from 'react';

// css
import './App.css';

function App() {
  const artistRef = useRef(null);
  const mouseRef = useRef(null);
  const mouseChildRef = useRef(null);
  
  const [menu, setMenu] = useState(null);
  const [displayedText, setDisplayedText] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [index, setIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const texts = {
    BM: [
      "이런 날엔 부기맨이 찾아와 나를 잡아간대",
      "깊고 어두운 옷장 속에 스르르르",
      "그래 날 데려가 줘",
      "차라리 너와 저 너머로 도망칠래",
      "그럼 나도 부기맨",
    ],
    OTC: [
      "내가 밤이 돼줄게",
      "너는 눈이 돼줄래?",
      "내가 빨강 해줄게",
      "너가 내 초록 해줄래?",
      "내가 널 받아낼게",
      "너는 펑펑 내려줄래?",
      "우리 같이 흩날려",
      "세상을 하얗게 덮어볼래?",
    ],
  };

  let cursorX = 0, cursorY = 0;
  let scale = 1;
  let color = '#e50000';
  let stage = '';
  
  function mousemove(e) {
    cursorX = e.pageX - mouseRef.current.offsetWidth / 2;
    cursorY = e.pageY - mouseRef.current.offsetHeight / 2;
    mouseRef.current.style.transform = 
      `translate3d(${cursorX}px, ${cursorY}px, 0)`;

    switch(e.target.getAttribute('data-cursor')) {
      case 'title':
        if (stage === 'title') return;
        scale = 4;
        color = '#e50000';
        stage = 'title';
        break;
      case 'liryc':
        if (stage === 'liryc') return;
        scale = 4;
        color = '#00fbff';
        stage = 'liryc';
        break;
      default:
        if (stage === '') return;
        scale = 1;
        color = '#e50000';
        stage = '';
        break;
    }
    mouseChildRef.current.style.setProperty('--cursor-scale', scale);
    mouseChildRef.current.style.setProperty('--cursor-clr', color);
  };

  function toggleMenu(p) {
    if (menu === p) {
      setFadeOut(true);
      setTimeout(() => {
        setMenu(null);
        setDisplayedText([]);
        setFadeOut(false);
      }, 800);
    } else {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentLine(0);
        setIndex(0);
        setMenu(p);
        setDisplayedText([]);
        setFadeOut(false);
      }, 800);
    }
  };

  function updatingText(newWord) {
    const updatedLines = [...displayedText];
    updatedLines[currentLine] = (updatedLines[currentLine] || "") + newWord;
    return updatedLines
  };
  
  useEffect(() => {
    if (!menu) return;

    const lines = texts[menu];
    if (currentLine >= lines.length) return;

    const line = lines[currentLine];
    const typingInterval = setInterval(() => {
      if (index < line.length) {
        setDisplayedText((prev) => updatingText(line[index]));
        setIndex((prev) => prev + 1);
      } else {
        clearInterval(typingInterval);
        setCurrentLine((prev) => prev + 1);
        setIndex(0);
      }
    }, 150); // 타이핑 속도 (ms)

    return () => clearInterval(typingInterval);
  }, [menu, currentLine, index]);

  useEffect(() => {
    if (!artistRef.current || !mouseRef.current) return;

    document.addEventListener('mousemove', mousemove);

    let cnt = 0;

    const glitchInterval = setInterval(() => {
      // artistRef.current
      const skew = Math.random() * 10 - 5;
      // artistRef.current::before
      const top1 = Math.random() * 100;
      const btm1 = Math.random() * 100;
      // artistRef.current::after 
      const top2 = Math.random() * 100;
      const btm2 = Math.random() * 100;

      artistRef.current.style.setProperty('--skew', `${skew}deg`);
      artistRef.current.style.setProperty('--t1', `${top1}%`);
      artistRef.current.style.setProperty('--b1', `${btm1}%`);
      artistRef.current.style.setProperty('--t2', `${top2}%`);
      artistRef.current.style.setProperty('--b2', `${btm2}%`);
      artistRef.current.style.setProperty('--scale', '1');

      cnt++;

      if (cnt % 15 === 0) {
        const bigSkew = Math.random() * 180 - 90;
        artistRef.current.style.setProperty('--skew', `${bigSkew}deg`);
      }
      if (cnt % 30 === 0) {
        const bigScale = 1 + Math.random() / 2;
        artistRef.current.style.setProperty('--scale', `${bigScale}`);
      }
    }, 100);

    return () => {
      clearInterval(glitchInterval);
      document.removeEventListener('mousemove', mousemove);
    };
  }, []);

  return (
    <div className='base'>
      <div ref={mouseRef} id='mouse-cursor'>
        <div ref={mouseChildRef}></div>
      </div>
    
      <h1 className='artist' ref={artistRef} data-text='LUCY'>LUCY</h1>

      <div className='box'>
        <span data-cursor='title' className='title left' onClick={() => toggleMenu('BM')}>Boogie Man</span>
        <div className={`content${menu === 'BM' ? " show-ctt" : ""}${fadeOut ? " fade-out" : ""}`}>
          {menu === 'BM' && displayedText.map((a, i) => (
            <span data-cursor='liryc' key={i}>{a}</span>
          ))}
        </div>
      </div>
      <div className='box'>
        <span data-cursor='title' className='title right' onClick={() => toggleMenu('OTC')}>Over the Christmas</span>
        <div className={`content${menu === 'OTC' ? " show-ctt" : ""}${fadeOut ? " fade-out" : ""}`}>
          {menu === 'OTC' && displayedText.map((a, i) => (
            <span data-cursor='liryc' key={i}>{a}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
