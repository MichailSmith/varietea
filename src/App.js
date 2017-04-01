import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

import {TeaListContainer} from './containers'
export default class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/tea" exactly component={TeaListContainer} />
          <Route path="/tea/:tea" render={(props)=>(<div>{props.match.params.tea} Tea</div>)} />
          <Route render={()=> <Redirect to="/tea" />}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
