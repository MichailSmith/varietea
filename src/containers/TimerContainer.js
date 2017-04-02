import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Timer } from '../components';
import { updateTimer } from '../actions';

const mapStateToProps = (state) => {
  const {timeRemaining, timerRunning} = state.timer;
  return{
    timeRemaining,
    timerRunning
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: ()=> {
      dispatch(updateTimer());
    }
  };
};

class TimerContainer extends Component{
  componentDidMount(){
    this.interval = setInterval(this.props.onUpdate, 33);
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }
  render(){
    const { timeRemaining, timerRunning } = this.props;

    return(
        <Timer secondsRemaining={Math.ceil(timeRemaining/1000)} isRunning={timerRunning}/>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TimerContainer);
