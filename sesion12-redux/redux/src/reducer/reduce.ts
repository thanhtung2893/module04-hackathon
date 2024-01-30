import { combineReducers } from 'redux';
import { ActionTypes, Action } from '../action/action';

interface AppState {
  randomNumber: number;
  cart: { id: number; name: string; price: number }[];
  total: number;
}

const initialState: AppState = {
  randomNumber: 0,
  cart: [],
  total: 0,
};

const randomNumberReducer = (state = initialState.randomNumber, action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD_RANDOM_NUMBER:
      return Math.floor(Math.random() * 8) + 2;
    default:
      return state;
  }
};

const cartReducer = (state = initialState.cart, action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return [...state, action.payload];
    default:
      return state;
  }
};

const totalItemsReducer = (state = initialState.total, action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return state + 1;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  randomNumber: randomNumberReducer,
  cart: cartReducer,
  total: totalItemsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
