import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home';
import GlobalStyles from './GlobalStyles/';

const App = () => {
  return ( 
    <>
      <GlobalStyles/>
      <Router>
        <Home/>
      </Router>
      
    </>
   );
}
 
export default App;
