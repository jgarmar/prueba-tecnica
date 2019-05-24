import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import App from './App';
import List from './views/list';
import Create from './views/create';
import Update from './views/update';
import Delete from './views/delete';

var routes = (
  <Router>
      <Route exact path="/" component={App} />
      <Route path="/list" component={List} />
      <Route path="/create" component={Create} />
      <Route path="/update/:id" component={Update} />
      <Route path="/delete/:id" component={Delete} />
  </Router>
)

ReactDOM.render(routes, document.getElementById('app'));
