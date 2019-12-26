import React from 'react';
import styles from './index.scss';

const HangEquipment:React.FC = (props) => {
  const { } = props;
  return (
    <div className={styles.hangmanEquipment}>
      <div className={styles.base}>
        <div className={styles.left} />
        <div className={styles.right} />
      </div>
      <div className={styles.bracket}>
        <div className={styles.left} />
        <div className={styles.top} />
        <div className={styles.right} />
      </div>
    </div>
  );
};

export default HangEquipment;
