import React from 'react';
import styles from './index.scss';

const Layout:React.FC = (props) => {
  const { children } = props;
  return (
    <div className={styles.main}>
      {children}
    </div>
  );
};

export default Layout;
