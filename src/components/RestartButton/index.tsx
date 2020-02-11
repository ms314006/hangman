import React, { useContext } from 'react';
import QuestionContext from '../../context/QuestionContext';
import styles from './index.scss';

interface ResultButtonProps {
  text: string
}

const ResultButton: React.FC<ResultButtonProps> = (props: ResultButtonProps) => {
  const { text } = props;
  const { resetAnsweresAndQuestion }: any = useContext(QuestionContext);
  return (
    <button
      type="button"
      className={styles.restartBtn}
      onClick={resetAnsweresAndQuestion}
    >
      {text}
    </button>
  );
};

export default ResultButton;
