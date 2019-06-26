import React from 'react';
import './App.css';
// import Login from './src/components/signup/login'
import Signup from './src/components/signup/signup'
// import Forgotpass from './src/components/signup/forgotpass'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
     <Router>
      <div>
        <nav>
         <Signup/>
        </nav>
        {/* <Route path="/Login" exact  render={() => <Login name='Haren' />} />
        <Route path="/Signup"  component={Signup}/>
        <Route path="/Forgotpass" component={Forgotpass} /> */}
      </div>
    </Router>
  );
}

export default App;
