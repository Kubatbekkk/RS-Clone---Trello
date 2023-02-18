import { combineReducers, configureStore } from '@reduxjs/toolkit';

import boardsSlicer from './boardsSlicer';

// const rootReducer = combineReducers({boards: boardsSlicer})

export const store = configureStore({
    reducer: {boards: boardsSlicer}
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
  // export type RootState = ReturnType<typeof rootReducer>
