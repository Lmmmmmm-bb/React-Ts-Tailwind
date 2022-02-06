import { FC } from 'react';
import styles from './index.module.scss';
import { Redirect, Route, Switch } from 'react-router-dom';

import Main from '../pages/Main';

const App: FC = () => {
  return (
    <div className={styles.app}>
      <Switch>
        <Route exact path="/main" component={Main} />
        <Redirect to="/main" />
      </Switch>
    </div>
  );
};

export default App;
