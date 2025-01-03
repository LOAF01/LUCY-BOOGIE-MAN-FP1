import { useRef, useEffect } from 'react';

// css
import './App.css';

function App() {
  const titleRef = useRef(null);

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
      <span className='left'>Boogie Man</span>
      <span className='right'>Over the Christmas</span>
    </div>
  );
}

export default App;
