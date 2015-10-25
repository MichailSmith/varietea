import React, { PropTypes } from 'react';
import styles from './Tea.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class Tea extends React.Component{

  static propTypes = {
    name: PropTypes.string.isRequired,
    preparation: {
      amount: {},
      temperature:{},
      steepTimes:{}
    }
  };

  render(){
    return (
      <div className="Tea">
        <span className="Tea-Header">

          <a className="Tea-Link" href={'/' + this.props.id} onClick={Link.handleClick}>{this.props.name}</a>
        </span>
        <div className="Tea-Content">
          <div>
            <label>Amount: </label>
            <span>{this.props.preparation.amount.weight + ' ' + this.props.preparation.amount.unit}</span>
          </div>
          <div>
            <label>Temperature: </label>
            <span>{this.props.preparation.temperature.min}°C - {this.props.preparation.temperature.max}°C </span>
          </div>
          <div>
            <label>First Steep: </label>
            <span>{this.props.preparation.steepTimes.first} seconds</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Tea;
