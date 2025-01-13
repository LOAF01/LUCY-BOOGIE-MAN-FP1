// css
import './IntroSheet.css';

function IntroSheet(props) {
  const {setShowIntro} = props;

  return (
    <div className="intro-bg">
      <div className='intro-eyes'>
        <div className='eye left'/>
        <div className='eye right' onClick={() => setShowIntro((p) => !p)}/>
      </div>
      <div className='intro-lip'>
        <img src={`${process.env.PUBLIC_URL}/img/smile.png`} alt='smile'/>
      </div>
    </div>
  );
};

export default IntroSheet;