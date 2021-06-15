import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

//Component
import MainPage from './view/MainPage';
import Setting from './view/Setting';
import Navbar from './Navbar';
import { Api } from './ContextApi';
import Projects from './view/Projects';

function App() {
  return (
    <div>
      <Api>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={MainPage}></Route>
            <Route path="/setting" exact component={Setting}></Route>
            <Route path="/projects" exact component={Projects}></Route>
          </Switch>
        </Router>
      </Api>
    </div>
  );
}

export default App;
