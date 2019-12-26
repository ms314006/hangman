import React from 'react';
import Layout from '../../components/Layout';
import Word from '../../components/Word';
import Hangman from '../../components/Hangman';
import words from '../../asset/words';
import styles from './index.scss';

const Main:React.FC = () => (
  <Layout>
    <div className={styles.title}>Hungman</div>
    <div className={styles.words}>
      {
        words.map(word => (
          <Word key={word} word={word} clickEvent={() => { console.log(word); }} />
        ))
      }
    </div>
    <Hangman />
    <div style={{ background: '#aaa', width: '100%', height: '100%' }} />
  </Layout>
);

export default Main;
