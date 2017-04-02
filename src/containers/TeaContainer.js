import { connect } from 'react-redux';
import React, {Component} from 'react';
import { startTimer, pauseTimer, resetTimer, updateSteeps } from '../actions';
import { Tea } from '../components';

const mapStateToProps = (state) => {
  const { tea, timerRunning, steepCount } = state.timer;
  return{
    tea,
    timerRunning,
    steepCount
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStartClick: ()=> {
      dispatch(startTimer());
    },
    onPauseClick: ()=>{
      dispatch(pauseTimer());
    },
    onResetClick: ()=> {
      dispatch(resetTimer());
    },
    onChangeSteepCount: (steepCount)=>{
      dispatch(updateSteeps(steepCount))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tea);
