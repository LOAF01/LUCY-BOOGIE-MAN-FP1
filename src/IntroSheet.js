/* eslint-disable */
import React, { use, useEffect, useState } from 'react';
import { Howl } from 'howler';

// css
import './IntroSheet.css';

function IntroSheet(props) {
  const {setShowIntro} = props;

  const [introBgm, setIntroBgm] = useState(false);
  const [modalBgm, setModalBgm] = useState(false);
  const [modal, setModal] = useState(true);
  
  function clickEyeRight() {
    document.documentElement.style.setProperty("--intro-opacity", 1);
    const intro_fading = new Howl({
      src: ['https://loaf01.github.io/fp1/FP1_intro_fading.mp3'],
      autoplay: false
    })
    intro_fading.play();
    setTimeout(() => {
      setShowIntro((p) => !p);
    }, 200);
  };

  function clickModal() {
    setIntroBgm(true);
    setModalBgm(true);

    document.documentElement.style.setProperty("--modal-opacity", 0);
    document.documentElement.style.setProperty("--modal-scale", 2);

    setTimeout(() => {
      setModal(!modal);
    }, 5000);
  }

  useEffect(() => {
    if (!introBgm) return;
    
    const introBgmSE = new Howl({
      src: ['https://loaf01.github.io/fp1/FP1_intro_bgm.mp3'],
      preload: true,
      autoplay: false,
      loop: true,
    });
    introBgmSE.play();

    return () => {
      introBgmSE.unload();
    }
  }, [introBgm]);

  useEffect(() => {
    if (!modalBgm) return;
    
    const modalSE = new Howl({
      src: ['https://loaf01.github.io/fp1/FP1_modal.mp3'],
      preload: true,
      autoplay: false,
    });
    modalSE.play();

    return () => {
      modalSE.unload();
    }
  },[modalBgm]);

  return (
    <div className="intro-bg">
      {modal && <div className='modal'>
        <div className='modal-box'>
          <div style={{fontSize: '50px', textShadow: '0 0 5px #666'}}>⚠️</div>
          <p>Find the RIGHT place and click.</p>
          <button onClick={clickModal}>OK</button>
        </div>
      </div>}
      
      <div className='intro-eyes'>
        <div className='eye left'/>
        <div className='eye right' onClick={clickEyeRight}/>
      </div>
      <div className='intro-lip'>
        <img src={`${process.env.PUBLIC_URL}/img/smile.png`} alt='smile'/>
      </div>
    </div>
  );
};

export default IntroSheet;