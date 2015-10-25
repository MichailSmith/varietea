import {EventEmitter} from 'events';
import teaListDispatcher from '../dispatchers/teaListDispatcher';
import ActionTypes from '../constants/ActionTypes';

let _teas = {};
const CHANGE_EVENT = 'change';

function _setTeas(teas){
  _teas = null;
  if(teas && teas.forEach){
    _teas = {};
    teas.forEach(tea=>{
      _teas[tea.name] = tea;
    });
  }
}

class TeaStore extends EventEmitter{
  emitChange(){
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback){
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback){
    this.removeListener(CHANGE_EVENT, callback);
  }

  getAll(){
    if(!_teas){
      return _teas;
    }
    return Object.keys(_teas).map(key=>_teas[key]);
  }

  get(teaName){
    return _teas[teaName];
  }
}
var store = new TeaStore();

store.dispatchToken =  teaListDispatcher.register(action=>{
  switch (action.type){
  case ActionTypes.RECEIVE_TEAS:
    _setTeas(action.teas);
    store.emitChange();
    break;
  default:
    //NO-OP
  }
});

export default store;
