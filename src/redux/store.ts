import { createStore, applyMiddleware, Action } from 'redux';
import { reducer } from './reducers/reducer';
import thunkMiddleWare, { ThunkAction } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

type RootReducerType = typeof reducer;
export type AppStateType = ReturnType<RootReducerType>;

export type InferActionsTypes<T> = T extends {
  [keys: string]: (...args: any[]) => infer U;
}
  ? U
  : never;

export type BaseThunkType<A extends Action = Action, R = Promise<void>> =
  ThunkAction<R, AppStateType, unknown, A>;

/* export const store = createStore(reducer, applyMiddleware(thunkMiddleWare)); */

export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunkMiddleWare)
  )
);


