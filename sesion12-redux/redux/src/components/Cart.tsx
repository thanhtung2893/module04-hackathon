import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../reducer/reduce';

const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <div>
      <h2>your cart</h2>
      {cart.length === 0 ? (
        <p>chưa có sản phẩm trong giỏ hàng.</p>
      ) : (
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              {product.name} - ${product.price}-
              <button>xóa</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
