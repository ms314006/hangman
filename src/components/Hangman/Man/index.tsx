import React, { useContext } from 'react';
import QuestionContext from '../../../context/QuestionContext';
import styles from './index.scss';

const HangEquipment:React.FC = () => {
  const { question, answered }: any = useContext(QuestionContext);
  const getDisplayOfParts = (partType: string) => {
    let wrongAnswered = [...answered];
    question.forEach((word: string) => {
      wrongAnswered = wrongAnswered.filter(
        (answeredWord: string) => answeredWord !== word,
      );
    });

    const displaySortOfPart = [
      'initial', 'head', 'body', 'leftHand', 'rightHand', 'leftFoot', 'rightFoot',
    ];

    const isHiddenBorder = () => (
      wrongAnswered.length < displaySortOfPart.findIndex(part => part === partType)
    );

    return `
      ${isHiddenBorder() && styles.hiddenBorder}
    `;
  };

  return (
    <div className={styles.man}>
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
