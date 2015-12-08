import teaListDispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';

export default {
  receiveAll: teas =>{
    teaListDispatcher.dispatch({
      type: ActionTypes.RECEIVE_TEAS,
      teas: teas
    });
  },

  updateTea: (originalName, teaData)=> {
    teaListDispatcher.dispatch({
      type: ActionTypes.UPDATE_TEA,
      tea: teaData,
      originalName: originalName
    });
  },

  saveTea: teaName => {
    teaListDispatcher.dispatch({
      type: ActionTypes.SAVE_TEA,
      teaName: teaName
    })
  }
};
