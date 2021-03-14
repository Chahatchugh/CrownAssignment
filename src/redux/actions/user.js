  import {
    SONGS_LIST,
    USER_NAME,
  } from '../constants/user';

// Redux Flow ---> Action dispatch the payload and type to reducer
  export const userName = data => async (dispatch: any) => {
      dispatch({
        type: USER_NAME,
        payload: data
      });
  };

  export const songsList = () => async (dispatch: any) => {
    //On Refresh 
    dispatch({
      type: SONGS_LIST,
      payload: []
    });
    //Fetch API
    let res = await fetch('https://itunes.apple.com/search?term=Michael+jackson')
    res = await res.json()
    //Dispatch Songs
    if(res.results?.length){
    dispatch({
      type: SONGS_LIST,
      payload: res.results
    });
  }
};

  