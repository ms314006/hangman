import React from 'react';
import Layout from '../../components/Layout';
import styles from './index.scss';

const Main:React.FC = () => (
  <Layout>
    <div className={styles.title}>Hungman</div>
    <div style={{ background: '#ffa', width: '100%', height: '100%' }} />
    <div style={{ background: '#aff', width: '100%', height: '100%' }} />
    <div style={{ background: '#aaa', width: '100%', height: '100%' }} />
  </Layout>
);

export default Main;
