const timerAudio = new Audio('/dist/TimerFinished.mp3');

const getSteepTime = (tea, steepCount)=> {
  const timeRemaining =
    (tea.time_seconds +
    (steepCount - 1) *
    tea.additional_time_per_steep) * 1000;

  return timeRemaining > tea.minimum_time_seconds?
    timeRemaining:
    tea.minimum_time_seconds * 1000;
};

const timer = (state = {}, action) =>{
  switch(action.type) {
    case 'START_TIMER':
    return {
      ...state,
      timerUpdatedTime: action.startTime,
      timerRunning:true,
      timeRemaining:
        state.timeRemaining > 0?
        state.timeRemaining:
        getSteepTime(state.tea, state.steepCount)
    };

    case 'UPDATE_TIMER':
    if(state.timerUpdatedTime > action.time || !state.timerRunning){
      return state;
    }
    const timeElapsed = action.time - state.timerUpdatedTime;
    const newTimeRemaining = state.timeRemaining - timeElapsed;
    if(newTimeRemaining <= 0 && state.timerRunning){
      timerAudio.play();
    }
    return {
      ...state,
      timerUpdatedTime: action.time,
      timeRemaining: newTimeRemaining > 0? newTimeRemaining: 0,
      timerRunning: newTimeRemaining > 0
    };

    case 'RESET_TIMER':
    return {
      ...state,
      timerRunning: false,
      steepCount: 1,
      timeRemaining: state.tea.time_seconds * 1000
    };

    case 'PAUSE_TIMER':
    return{
      ...state,
      timerRunning: false
    };

    case 'SET_TIMER':
    return{
      ...state,
      timerRunning: false,
      timeRemaining: action.timeRemaining
    };

    case 'UPDATE_STEEPS':

    return {
      ...state,
      timeRemaining: getSteepTime(state.tea, action.steepCount),
      steepCount: action.steepCount,
      timerRunning: false
    };

    case 'SET_TEAS':
    return{
      ...state,
      teas: action.teas
    };

    case 'SELECT_TEA':
    const selectedTea = state.teas[action.teaName];
    if(selectedTea){
      return {
        ...state,
        tea: {
          ...selectedTea,
          name: action.teaName,
          temperature_F: selectedTea.temperature_C * 9.0/5.0 + 32.0
        },
        timeRemaining: getSteepTime(selectedTea, 1),
        timerRunning: false,
        steepCount: 1
      }
    } else {
      return {
        ...state,
        tea: undefined
      };
    }
    default:
    return state;
  }
};

export default timer;
