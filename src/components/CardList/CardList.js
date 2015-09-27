import React from 'react';
import styles from './CardList.css';
import withStyles from '../../decorators/withStyles.js';

@withStyles(styles)
class CardList{

  render(){
    let results = this.props.results;
    let renderResult = this.props.renderResult;
    if(results.map){
      return(
        <div className="CardList">
          {results.map(renderResult)}
        </div>
      )
    }
    return(<span>No results found</span>)
  }
}

export default CardList;
