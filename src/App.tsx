import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
// import PrivacyPolicy from './pages/Privacypolicy';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home/>
        </Route>
        {/* <Route path="/PrivacyPolicy" />
          <div id='privatePolitics'>
              <Link to="/PrivacyPolicy">Política de Privacidade</Link>
          </div> */}
      </Switch>
    </Router>
  );
}

export default App;
