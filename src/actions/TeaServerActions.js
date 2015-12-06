import teaListDispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';

export default {
  receiveAll: teas =>{
    teaListDispatcher.dispatch({
      type: ActionTypes.RECEIVE_TEAS,
      teas: teas
    });
  }
};
