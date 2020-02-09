import React, { useState } from 'react';
import styles from './index.scss';

const HangEquipment:React.FC = () => {
  const [step, setStep] = useState(-1);
  const getDisplayOfParts = (partType: string) => {
    const displaySortOfPart = [
      'head', 'body', 'leftHand', 'rightHand', 'leftFoot', 'rightFoot',
    ];

    const isHiddenBorder = () => (
      step < displaySortOfPart.findIndex(part => part === partType)
    );

    return `
      ${isHiddenBorder() && styles.hiddenBorder}
    `;
  };

  return (
    <div className={styles.man}>
      <button
        type="button"
        onClick={() => { setStep(step + 1); }}
      >
        ClickMe!
      </button>
      <button
        type="button"
        onClick={() => { setStep(0); }}
      >
        Reset!
      </button>
      <div className={`${styles.head} ${getDisplayOfParts('head')}`} />
      <div className={`${styles.body} ${getDisplayOfParts('body')}`} />
      <div className={`${styles.leftHand} ${getDisplayOfParts('leftHand')}`} />
      <div className={`${styles.rightHand} ${getDisplayOfParts('rightHand')}`} />
      <div className={`${styles.leftFoot} ${getDisplayOfParts('leftFoot')}`} />
      <div className={`${styles.rightFoot} ${getDisplayOfParts('rightFoot')}`} />
    </div>
  );
};

export default HangEquipment;
