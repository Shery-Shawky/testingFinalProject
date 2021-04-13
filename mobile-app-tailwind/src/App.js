import React from 'react';
import {Switch,Route} from 'react-router-dom'

// Landing
import LandingPage from './landind/index'

//HomePage
import HomePage from './pages/homePages/index';




function App() {
  return (
    <Switch>
      <Route path='/'>
        <LandingPage heading="My First App">
          <HomePage/>
        </LandingPage>
      </Route>
    </Switch>
  );
}

export default App;
