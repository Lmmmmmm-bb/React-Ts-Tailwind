import { FC } from 'react';
import { Redirect } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import './index.scss';

import Main from '../pages/Main';

const App: FC = () => {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Main} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
};

export default App;
