import React, { useContext } from 'react';
import QuestionContext from '../../context/QuestionContext';
import { arrayFindTarget } from '../../utils/array';
import styles from './index.scss';

const Question: React.FC = () => {
  const { question, answered }: any = useContext(QuestionContext);
  return (
    <div className={styles.question}>
      {
        question.map((word: string, index: number) => {
          const key = `${word}-${index}`;
          return (
            <div
              key={key}
              className={styles.word}
            >
              {arrayFindTarget(answered, word) ? word : ''}
            </div>
          );
        })
      }
    </div>
  );
};

export default Question;
