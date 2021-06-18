import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ReactGa from 'react-ga';

//Component
import MainPage from './view/MainPage';
import Setting from './view/Setting';
import Navbar from './Navbar';
import { Api } from './ContextApi';
function App() {
  useEffect(() => {
    ReactGa.initialize('UA-181796091-1');
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div>
      <Api>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={MainPage}></Route>
            <Route path="/setting" exact component={Setting}></Route>
          </Switch>
        </Router>
      </Api>
    </div>
  );
}

export default App;
