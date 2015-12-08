import React, { Component } from 'react';
import Tea from '../Tea';
import CardList from '../CardList';
import TeaStore from '../../stores/TeaStore';

function getStateFromStores(){
  return{
    teas: TeaStore.getAll()
  }
}
class TeaCardList extends Component{
  constructor(){
    super();
    this.state = getStateFromStores();
  }

  render(){
    let data = {
      results: this.state.teas,
      renderResult: result=>{
        return <Tea {...result}/>;
      }
    };
    return <CardList {...data} />;
  }
}

export default TeaCardList;
