import React from 'react';
import {NavBar,Sidebar} from './components/index';
import {BrowserRouter as Router} from 'react-router-dom';

const App = () => {
  return ( 
    <>
      <Router>
        <Sidebar/>
        <NavBar />
      </Router>
      
    </>
   );
}
 
export default App;
