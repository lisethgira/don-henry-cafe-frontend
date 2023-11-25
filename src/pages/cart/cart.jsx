import PropTypes from 'prop-types';

const Cart = ({ cart }) => {
   return (
       <div>
           <h2>Carrito de compras</h2>
           {cart.map((product, index) => (
               <div key={index}>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p>${product.price}</p>
               </div>
           ))}
       </div>
   );
}

Cart.propTypes = {
   cart: PropTypes.array.isRequired,
};

export default Cart;
