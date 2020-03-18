import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './app.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import All from '@/views/all/index.jsx';
import Finished from '@/views/finished/index.jsx';
import Unfinish from '@/views/unfinish/index.jsx';
import Nofound from '@/views/nofound/index.jsx';

function App () {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/all" component={All}></Route>
        <Route path="/finished" component={Finished}></Route>
        <Route path="/unfinish" component={Unfinish}></Route>
        <Redirect exact path="/" to="/all"></Redirect>
        <Route component={Nofound}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
