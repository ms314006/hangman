import React, { useState, useContext } from 'react';
import QuestionContext from '../../context/QuestionContext';
import styles from './index.scss';

interface WordProps {
  word: string
  clickEvent: () => void
}

const Word: React.FC<WordProps> = (props: WordProps) => {
  const { word, clickEvent } = props;
  const [clicked, setClicked] = useState(false);
  const answer: any = useContext(QuestionContext);

  const isAnswered = () => {
    const target = answer.find(
      ({ word: answerWord }) => answerWord === word.toLowerCase(),
    );
    if (!target) return false;
    return target.answered;
  };

  const getFontColor = () => {
    if (isAnswered()) return '#00FF00';
    if (clicked) return '#FF0000';
    return '#000000';
  };
  return (
    <div
      className={styles.main}
      style={{ color: getFontColor() }}
      onClick={() => {
        if (!clicked) {
          setClicked(true);
          clickEvent();
        }
      }}
      onKeyDown={() => {}}
    >
      {word}
    </div>
  );
};

export default Word;
