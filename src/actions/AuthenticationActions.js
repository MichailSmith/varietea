import teaListDispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';
import http from '../core/HttpClient';

export default {
  updateUserName: username =>{
    teaListDispatcher.dispatch({
      type: ActionTypes.CHANGE_USERNAME,
      username: username
    });
  },
  updatePassword: password =>{
    teaListDispatcher.dispatch({
      type: ActionTypes.CHANGE_PASSWORD,
      password: password
    });
  },
  login: async ()=>{

  }
}
