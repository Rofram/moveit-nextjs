import { useState, useEffect, useContext } from 'react';
import styles from '../styles/components/Countdown.module.scss';
import { ChallengeContext } from '../contexts/ChallengeContext';

let countdownTimeout: NodeJS.Timeout;

const Countdown = () => {
  const { startNewChallenge } = useContext(ChallengeContext);


  const [ time, setTime ] = useState(0.1 * 60);
  const [ isActive, setIsActive ] = useState(false);
  const [ hasFinished, setHasFinished ] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return(
    <div>
      <div className={styles.container}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button 
          disabled
          className={styles.CountdownButton}
        >
          Ciclo encerrado <img className={styles.buttonIcon} src="icons/check_circle.svg" alt="ok" />
        </button>
      ) : (
        <>
          { isActive ? (
            <button 
              type="button"
              onClick={resetCountdown}
              className={`${styles.CountdownButton} ${styles.CountdownButtonIsActive}`}
            >
              Abandonar ciclo <img className={styles.buttonIcon} src="icons/left_icon.svg" alt="X" />
            </button>
          ) : (
            <button 
              type="button"
              onClick={startCountdown}
              className={styles.CountdownButton}
            >
              Iniciar um ciclo <img className={styles.buttonIcon} src="icons/play_arrow.svg" alt="ok" />
            </button>
          ) }
        </>
      )}
      
    </div>
  );
}

export default Countdown;