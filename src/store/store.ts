import { createStore, applyMiddleware, compose } from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import { rootReducer } from "./reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

declare module "redux" {
  interface Dispatch<A extends Action = AnyAction> {
    <S, E, R>(asyncAction: ThunkAction<R, S, E, A>): R;
  }
}

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
/* eslint-enable */
