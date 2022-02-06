import { Button, Toast } from '@douyinfe/semi-ui';
import { FC, useEffect } from 'react';

const Main: FC = () => {
  useEffect(() => {
    Toast.success('Semi Design');
  }, []);

  return <div></div>;
};

export default Main;
