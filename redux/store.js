import { combineReducers, configureStore } from '@reduxjs/toolkit'
import transactionReducer from './transactionSlice';
import goalReducer from './goalSlice';
import { loadState, saveState } from './storage';

const getPreloadedState = async () => {
  try {
      const result = await loadState();
      return result;
  } catch (error) {
    console.log("error looking for previous state",error);
    return undefined;
  }
}

const setStore = async () => {

  const preState = await getPreloadedState();
  
  const store =  configureStore({
    reducer: {
      transactions: transactionReducer,
      goals : goalReducer
    },
    preloadedState: preState
  });

  store.subscribe(()=>{
    saveState(store.getState());
  });
  
  return store;
}

export default setStore;