import React from 'react';
import styles from './index.scss';

interface WordProps {
  word: string
  clickEvent: () => void
}

const Word: React.FC<WordProps> = (props: WordProps) => {
  const { word, clickEvent } = props;
  return (
    <div
      className={styles.main}
      onClick={clickEvent}
      onKeyDown={() => {}}
    >
      {word}
    </div>
  );
};

export default Word;
