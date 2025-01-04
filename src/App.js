import { useRef, useEffect, useState } from 'react';

// css
import './App.css';

function App() {
  const titleRef = useRef(null);
  
  const [box1, setBox1] = useState(false);

  function toggleBox(box, setBox) {
      setBox(!box);
  };

  useEffect(() => {
    const ref = titleRef.current;
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
      <h1 className='title' ref={titleRef} data-text='LUCY'>LUCY</h1>
      <div className='box' onClick={() => toggleBox(box1, setBox1)}>
        <span className='left'>Boogie Man</span>
        <div className={`content${box1 ? " show-ctt" : ""}`}>
          <p>이런 날엔 부기맨이 찾아와 나를 잡아간대</p>
          <p>깊고 어두운 옷장 속에 스르르르</p>
          <p>그래 날 데려가 줘</p>
          <p>차라리 너와 저 너머로 도망칠래</p>
          <p>그럼 나도 부기맨</p>
        </div>
      </div>
      <div className='box'>
        <span className='right'>Over the Christmas</span>
      </div>
    </div>
  );
}

export default App;
