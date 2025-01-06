import { useRef, useEffect, useState } from 'react';

// css
import './App.css';

function App() {
  const artistRef = useRef(null);
  
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);

  const [currentLine, setCurrentLine] = useState(0);
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState([]);

  function toggleBox(box, setBox) {
    setBox(!box);
  };

  const BM = [
    "이런 날엔 부기맨이 찾아와 나를 잡아간대",
    "깊고 어두운 옷장 속에 스르르르",
    "그래 날 데려가 줘",
    "차라리 너와 저 너머로 도망칠래",
    "그럼 나도 부기맨",
  ];
  const OTC = [
    "내가 밤이 돼줄게",
    "너는 눈이 돼줄래?",
    "내가 빨강 해줄게",
    "너가 내 초록 해줄래?",
    "내가 널 받아낼게",
    "너는 펑펑 내려줄래?",
    "우리 같이 흩날려",
    "세상을 하얗게 덮어볼래?",
  ];

  function updatingText(newWord) {
    const updatedLines = [...displayedText];
    updatedLines[currentLine] = (updatedLines[currentLine] || "") + newWord;
    return updatedLines
  };
  
  useEffect(() => {
    if (box1) {
      if (currentLine < BM.length) {
        const line = BM[currentLine];

        const typingInterval = setInterval(() => {
          if (index < line.length) {
            const updatedText = updatingText(line[index]);
            setDisplayedText(updatedText);
            setIndex((prev) => prev + 1);
          } else {
            clearInterval(typingInterval);
            setCurrentLine((prev) => prev + 1);
            setIndex(0);
          }
        }, 150); // 타이핑 속도 (ms)

        return () => {
          clearInterval(typingInterval);
        };
      }
    } else {
      setDisplayedText([]);
      setCurrentLine(0);
      setIndex(0);
    }
  }, [box1, currentLine, index]);

  useEffect(() => {
    const ref = artistRef.current;
    if (!ref) return;

    let cnt = 0;

    const interval = setInterval(() => {
      // ref
      const skew = Math.random() * 10 - 5;
      // ref::before
      const top1 = Math.random() * 100;
      const btm1 = Math.random() * 100;
      // ref::after 
      const top2 = Math.random() * 100;
      const btm2 = Math.random() * 100;

      ref.style.setProperty('--skew', `${skew}deg`);
      ref.style.setProperty('--t1', `${top1}%`);
      ref.style.setProperty('--b1', `${btm1}%`);
      ref.style.setProperty('--t2', `${top2}%`);
      ref.style.setProperty('--b2', `${btm2}%`);
      ref.style.setProperty('--scale', '1');

      cnt++;

      if (cnt % 15 === 0) {
        const bigSkew = Math.random() * 180 - 90;
        ref.style.setProperty('--skew', `${bigSkew}deg`);
      }
      if (cnt % 30 === 0) {
        const bigScale = 1 + Math.random() / 2;
        ref.style.setProperty('--scale', `${bigScale}`);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='base'>
      <h1 className='artist' ref={artistRef} data-text='LUCY'>LUCY</h1>
      <div className='box' onClick={() => toggleBox(box1, setBox1)}>
        <span className='title left'>Boogie Man</span>
        <div className={`content${box1 ? " show-ctt" : ""}`}>
          {displayedText.map((a, i) => (
            <span key={i}>{a}</span>
          ))}

          {/* <span>이런 날엔 부기맨이 찾아와 나를 잡아간대</span>
          <span>깊고 어두운 옷장 속에 스르르르</span>
          <span>그래 날 데려가 줘</span>
          <span>차라리 너와 저 너머로 도망칠래</span>
          <span>그럼 나도 부기맨</span> */}
        </div>
      </div>
      <div className='box' onClick={() => toggleBox(box2, setBox2)}>
        <span className='title right'>Over the Christmas</span>
        <div className={`content${box2 ? " show-ctt" : ""}`}>
          <span><span>내가 밤이 돼줄게</span></span>
          <span><span>너는 눈이 돼줄래?</span></span>
          <span><span>내가 빨강 해줄게</span></span>
          <span><span>너가 내 초록 해줄래?</span></span>
          <span><span>내가 널 받아낼게</span></span>
          <span><span>너는 펑펑 내려줄래?</span></span>
          <span><span>우리 같이 흩날려</span></span>
          <span><span>세상을 하얗게 덮여볼래?</span></span>
        </div>
      </div>
    </div>
  );
}

export default App;
