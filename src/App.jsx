import React, {Suspense,useEffect} from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import  { createBrowserHistory } from 'history';

import Landing from './containers/Landing'
import Products from './containers/Products'
import './App.scss';

function App() {

  useEffect(() => {
    AOS.init();
    window.addEventListener('load', AOS.refresh)
}, [])

  const history = createBrowserHistory();
  let routes = (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path='/menu' component={Products} />
        <Redirect to='/404' />
      </Switch>
    </Router>
  );

  return (
    <>
      <Suspense fallback={()=> (<> Please Wait</>)}>{routes}</Suspense>
    </>

  );

}

export default App;
