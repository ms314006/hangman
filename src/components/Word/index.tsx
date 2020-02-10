import React, { useContext } from 'react';
import QuestionContext from '../../context/QuestionContext';
import { arrayFindTarget } from '../../utils/array';
import styles from './index.scss';


interface WordProps {
  word: string
  clickEvent: () => void
}

const Word: React.FC<WordProps> = (props: WordProps) => {
  const { word, clickEvent } = props;
  const { question, answered }: any = useContext(QuestionContext);

  const isAnswer = () => (
    arrayFindTarget(answered, word) && arrayFindTarget(question, word)
  );

  const getFontColor = () => {
    if (isAnswer()) return '#00FF00';
    if (arrayFindTarget(answered, word)) return '#FF0000';
    return '#000000';
  };
  return (
    <div
      className={styles.main}
      style={{ color: getFontColor() }}
      onClick={() => {
        if (arrayFindTarget(answered, word)) return;
        clickEvent();
      }}
      onKeyDown={() => {}}
    >
      {word}
    </div>
  );
};

export default Word;
