// import PropTypes from 'prop-types';
import { CartContext } from '../../contexts/ShoppinCartContext';
import { useContext } from 'react';

const Cart = () => {

    const [cart] = useContext(CartContext);

   return (
       <div>
           <h2>Carrito de compras</h2>
           {cart.map((product, index) => (
               <div key={index}>
                  <p><img src={product.image} alt={product.name} /></p>

                  <h3>{product.name}</h3>
                  {/* <p>{product.description}</p> */}

                  <p>{product.quantity}</p>
                  <p>${product.price}</p>
               </div>
           ))}
       </div>
   );
}

// Cart.propTypes = {
//    cart: PropTypes.array.isRequired,
// };

export default Cart;
