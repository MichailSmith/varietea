import teaListDispatcher from '../dispatchers/teaListDispatcher';
import ActionTypes from '../constants/ActionTypes';

export default {
  receiveAll: teas =>{
    teaListDispatcher.dispatch({
      type: ActionTypes.RECEIVE_TEAS,
      teas: teas
    });
  }
};
