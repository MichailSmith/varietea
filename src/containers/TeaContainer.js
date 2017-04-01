import { connect } from 'react-redux';
import React, {Component} from 'react';
import { startTimer, pauseTimer, resetTimer } from '../actions';
import { Tea } from '../components';

const mapStateToProps = (state) => {
  const { tea } = state.timer;
  return{
    tea
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tea);
