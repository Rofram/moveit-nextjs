import {  useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/Countdown.module.scss';

const Countdown = () => {
  const { 
    minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    resetCountdown, 
    startCountdown 
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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