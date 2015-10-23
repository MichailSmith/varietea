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

  componentDidMount(){
    TeaStore.addChangeListener(this._onChange);
  }

  componentWillUnmount(){
    TeaStore.removeChangeListener(this._onChange);
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

  _onChange(){
    this.setState(getStateFromStores());
  }
}

export default TeaCardList;
