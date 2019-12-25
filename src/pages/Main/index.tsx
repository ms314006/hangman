import React from 'react';
import Layout from '../../components/Layout';
import Hangman from '../../components/Hangman';

const Main:React.FC = () => (
  <Layout>
    <Hangman />
    <div style={{ background: '#ffa', width: '100%', height: '100%' }} />
    <div style={{ background: '#aff', width: '100%', height: '100%' }} />
    <div style={{ background: '#aaa', width: '100%', height: '100%' }} />
  </Layout>
);

export default Main;
