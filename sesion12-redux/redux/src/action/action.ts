export enum ActionTypes {
    ADD_RANDOM_NUMBER = 'ADD_RANDOM_NUMBER',
    ADD_TO_CART = 'ADD_TO_CART',
  }
  
  type AddRandomNumberAction= {
    type: ActionTypes.ADD_RANDOM_NUMBER;
  }
  
  type AddToCartAction ={
    type: ActionTypes.ADD_TO_CART;
    payload: {
      id: number;
      name: string;
      price: number;
    };
  }
  
  export type Action = AddRandomNumberAction | AddToCartAction;
  
  export const addRandomNumber = (): AddRandomNumberAction => ({
    type: ActionTypes.ADD_RANDOM_NUMBER,
  });
  
  export const addToCart = (product: { id: number; name: string; price: number }): AddToCartAction => ({
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  });
  