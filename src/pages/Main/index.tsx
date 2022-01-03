import { FC, useEffect } from 'react';
import './index.scss';

import { Button, Toast } from '@douyinfe/semi-ui';

const Main: FC = () => {
  useEffect(() => {
    Toast.success('正在使用 Semi Design');
  }, []);

  return (
    <div className='Main text-center text-lg'>
      <Button>Main</Button>
    </div>
  );
};

export default Main;
