import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import infiniteaReducers from './reducers';

import { TeaListContainer, TeaContainer } from './containers';
import { selectTea, setTeas } from './actions';
import teas from './teas.json';
import { InfiniteaHeader } from './components';

let store = createStore(infiniteaReducers);
store.dispatch(setTeas(teas));

export default class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div>
            <InfiniteaHeader/>
            <Switch>
              <Route exact path="/tea" component={TeaListContainer} />
              <Route path="/tea/:tea" render={({match})=>{
                store.dispatch(selectTea(match.params.tea));
                return (<TeaContainer tea={match.params.tea}/>)}} />
              <Route render={()=> <Redirect to="/tea" />}/>
            </Switch>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}
