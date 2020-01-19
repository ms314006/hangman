import React from 'react';
import styles from './index.scss';

interface QuestionProps {
}

const Question: React.FC<QuestionProps> = (props) => {
  const {} = props;
  const question = 'apple';
  return (
    <div className={styles.question}>
      {
        question.split('').map((word, index) => {
          const key = `${word}-${index}`;
          return (
            <div
              key={key}
              className={styles.word}
            >
              {word}
            </div>
          )
        })
      }
    </div>
  );
};

export default Question;
