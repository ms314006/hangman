import React, { useContext } from 'react';
import QuestionContext from '../../../context/QuestionContext';
import { wrongAnsweredCount } from '../../../utils';
import styles from './index.scss';

const HangEquipment:React.FC = () => {
  const { question, answered }: any = useContext(QuestionContext);
  const getDisplayOfParts = (partType: string) => {
    const displaySortOfPart = [
      'initial', 'head', 'body', 'leftHand', 'rightHand', 'leftFoot', 'rightFoot',
    ];

    const isHiddenBorder = () => (
      wrongAnsweredCount(question, answered) < displaySortOfPart.findIndex(part => part === partType)
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
