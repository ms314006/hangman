import React from 'react';
import Layout from '../../components/Layout';
import Word from '../../components/Word';
import Hangman from '../../components/Hangman';
import Question from '../../components/Question';
import words from '../../asset/words';
import QuestionContext from '../../context/QuestionContext';
import useQuestion from '../../hooks/useQuestion';
import styles from './index.scss';

const Main:React.FC = () => {
  const [question, answered, updateAnsweredProgress, resetAnsweresAndQuestion] = useQuestion();
  const handleWordClick = (word: string) => () => {
    updateAnsweredProgress(word);
  };
  return (
    <Layout>
      <QuestionContext.Provider value={{ question, answered }}>
        <div className={styles.header}>
          <span className={styles.title}>Hungman</span>
        </div>
        <div className={styles.words}>
          <div className={styles.wordRow}>
            {
              words.slice(0, 13).map(word => (
                <Word
                  key={word}
                  word={word}
                  clickEvent={handleWordClick(word)}
                />
              ))
            }
          </div>
          <div className={styles.wordRow}>
            {
              words.slice(13).map(word => (
                <Word
                  key={word}
                  word={word}
                  clickEvent={handleWordClick(word)}
                />
              ))
            }
          </div>
        </div>
        <div className={styles.gameBlock}>
          <Hangman />
          <div className={styles.left}>
            <Question />
            <button
              type="button"
              className={styles.restartBtn}
              onClick={resetAnsweresAndQuestion}
            >
              Restart
            </button>
          </div>
        </div>
      </QuestionContext.Provider>
    </Layout>
  );
};

export default Main;
