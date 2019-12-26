import React from 'react';
import HangEquipment from './HangEquipment';
import styles from './index.scss';

const Hangman:React.FC = (props) => {
  const { } = props;
  return (
    <div className={styles.main}>
      <div className={styles.hangmanRoom}>
        <HangEquipment />
      </div>
    </div>
  );
};

export default Hangman;
