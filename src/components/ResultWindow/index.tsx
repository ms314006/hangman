import React from 'react';
import RestartButton from '../RestartButton';
import styles from './index.scss';

interface ResultWindowProps {
  isWin: boolean
}

const ResultWindow: React.FC<ResultWindowProps> = (props: ResultWindowProps) => {
  const { isWin } = props;
  return (
    <div className={styles.resultWindow}>
      <div className={styles.resultContent}>
        <div style={{ color: isWin ? '#00FF00' : '#FF0000' }}>
          {`You ${isWin ? 'win' : 'lose'}!`}
        </div>
        <RestartButton text={isWin ? 'Again' : 'Restart'} />
      </div>
    </div>
  );
};

export default ResultWindow;
