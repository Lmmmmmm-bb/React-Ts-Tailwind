import { FC } from 'react';
import styles from './index.module.scss';

const Main: FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.mainText}>Main Text</div>
    </div>
  );
};

export default Main;
