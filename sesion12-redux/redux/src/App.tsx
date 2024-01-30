import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRandomNumber, addToCart } from './action/action';
import { RootState } from './reducer/reduce';
import Cart from './components/Cart';
import Header from './components/Header';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const randomNumber = useSelector((state: RootState) => state.randomNumber);
  const handleAddToCart = () => {
    dispatch(addToCart({ id: Date.now(), name: `Product số:${randomNumber}`, price: 4000 }));
  };

  return (
    <div>
     <Header></Header>
      <h1>Random Number: {randomNumber}</h1>
      <button onClick={() => dispatch(addRandomNumber())}>Add</button>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <Cart />
    </div>
  );
};

export default App;
