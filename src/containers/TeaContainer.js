import { connect } from 'react-redux';
import React, {Component} from 'react';
import { startTimer, updateTimer } from '../actions';
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tea);
