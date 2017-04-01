import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { TeaList } from '../components';

const mapStateToProps = (state) =>{
  return {
    teas: state.timer.teas
  };
};

export default connect(mapStateToProps)(TeaList);
