import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/CompletedChallenges.module.scss';

const CompletedChallenges = () => {
  const { challengesCompleted } = useContext(ChallengeContext);

  return (
    <div className={styles.container}>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}

export default CompletedChallenges;