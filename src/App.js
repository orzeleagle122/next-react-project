import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import GlobalStyles from './GlobalStyles/';
import SignIn from './pages/SingIn';

const App = () => {
  return ( 
    <>
      <GlobalStyles/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signin" component={SignIn}/>
        </Switch>
      </Router>
      
    </>
   );
}
 
export default App;
