import React from 'react';
import styles from './Tea.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Tea{

  render(){
    return (
      <div className="well">
        <div className="row">
          <span className="col-xs-12">{this.props.name}</span>
        </div>
        <div className="row">
          <div className="col-xs-4">
            <label>Temperature: </label>
            <span>{this.props.preparation.temperature.min}°C - {this.props.preparation.temperature.max}°C </span>
          </div>
          <div className="col-xs-4">
            <label>First Steep: </label>
            <span>{this.props.preparation.steepTimes.first} seconds</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Tea;
