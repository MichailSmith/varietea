import React from 'react';
import styles from './Tea.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Tea{

  render(){
    return (
      <div className="Tea">
        <span className="Tea-Header">
          {this.props.name}
        </span>
        <div className="Tea-Content">
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
