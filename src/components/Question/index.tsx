import React, { useContext } from 'react';
import QuestionContext from '../../context/QuestionContext';
import styles from './index.scss';

const Question: React.FC = () => {
  const answer: any = useContext(QuestionContext);
  return (
    <div className={styles.question}>
      {
        answer.map(({ word, answered }, index: number) => {
          const key = `${word}-${index}`;
          return (
            <div
              key={key}
              className={styles.word}
            >
              {answered ? word : ''}
            </div>
          );
        })
      }
    </div>
  );
};

export default Question;
