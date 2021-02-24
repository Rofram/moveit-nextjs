import styles from '../styles/components/Profile.module.scss';

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Rofram.png" alt="Rodrigo de França"/>
      <div>
        <strong>Rodrigo de França</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 2
        </p>
      </div>
    </div>
  );
}

export default Profile;