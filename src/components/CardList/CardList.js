import React from 'react';
import styles from './CardList.css';
import withStyles from '../../decorators/withStyles.js';

@withStyles(styles)
class CardList{

  render(){
    let results = this.props.results;
    let renderResult = this.props.renderResult;
    return(
      <div className="CardList">
        {results.map(renderResult)}
      </div>
    )
  }
}

export default CardList;
