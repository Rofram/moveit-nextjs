import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.scss';

const ChallengeBox = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengeContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSuccess() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailure() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.container}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo Desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button 
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailure}
            >
              Falhei
            </button>
            <button 
              type="button"
              className={styles.challengeCompletedButton}
              onClick={handleChallengeSuccess}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber desafios</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up"/>
            Avance de level completando os desafios.
          </p>
        </div>
      )}
      
    </div>
  )
}

export default ChallengeBox;