import { FC, useEffect } from 'react';
import styles from './index.module.scss';

import { Button, Toast } from '@douyinfe/semi-ui';

const Main: FC = () => {
  useEffect(() => {
    Toast.success('正在使用 Semi Design');
  }, []);

  return (
    <div className={styles.main}>
      <Button>Main</Button>
      <div className={styles.mainText}>Main Text</div>
    </div>
  );
};

export default Main;
