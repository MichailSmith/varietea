import React from 'react';
import Tea from '../Tea';
import CardList from '../CardList';

class TeaCardList{

  render(){
    let data = {
      results: this.props.results,
      renderResult: result=>{
        return <Tea {...result}/>;
      }
    };
    return <CardList {...data} />;
  }
}

export default TeaCardList;
