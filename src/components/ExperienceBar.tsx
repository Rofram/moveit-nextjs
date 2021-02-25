import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ExperienceBar.module.scss';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengeContext);

  const percentagToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>
        0 xp
      </span>
      <div>
        <div style={{ width: `${percentagToNextLevel}%` }} />
        <span className={styles.currentExperience} style={{ left: `${percentagToNextLevel}%` }}>
          {currentExperience} xp
        </span>
      </div>
      <span>
        {experienceToNextLevel} xp
      </span>
    </header>
  );
}

export default ExperienceBar;