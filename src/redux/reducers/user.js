  import {
    SONGS_LIST,
    USER_NAME
  } from '../constants/user';

  const initialState = {
    name: '',
    songs: []
  };
  
  // Here, in switch case type check is done and state is managed
  export default (state = initialState, action = {}) => {
    switch (action.type) {
      case USER_NAME:
        return {
          ...state,
          name: action.payload
        };
      case SONGS_LIST:
        return {
          ...state,
          songs: action.payload
        };
      default:
        return state;
    }
  };