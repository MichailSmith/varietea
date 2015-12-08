import teaListDispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';
import http from '../core/HttpClient';

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

  saveTea: async (teaName, teaData) => {
    try {
      const saveResult = await http.put(`api/tea/${teaName}`, {tea: teaData});
      updateTea(saveResult);
    } catch (e) {
      console.log(e);
    }
  }
};
