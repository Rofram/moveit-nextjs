import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.scss';

const Countdown = () => {
  const [ time, setTime ] = useState(25 * 60);
  const [ active, setActive ] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setActive(!active);
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

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

      <button 
        type="button"
        onClick={startCountdown}
        className={styles.CountdownButton}
      >
        Iniciar um ciclo
      </button>
    </div>
  );
}

export default Countdown;