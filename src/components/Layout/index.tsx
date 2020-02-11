import React from 'react';
import styles from './index.scss';

const Layout:React.FC = (props) => {
  const { children } = props;
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
