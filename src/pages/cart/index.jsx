import { CartContext } from '../../contexts/ShoppinCartContext';
import { useContext, useState, useEffect } from 'react';

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    const [total, setTotal] = useState(0);

    const removeProduct = (index) => {
        const updatedCart = [...cart];
        const updatedProduct = { ...updatedCart[index] };
        updatedProduct.quantity -= 1;

        if (updatedProduct.quantity <= 0) {
            updatedCart.splice(index, 1);
        } else {
            updatedCart[index] = updatedProduct;
        }

        setCart(updatedCart);
    };

    const updateProductQuantity = (index, quantity) => {
        const updatedCart = [...cart];
        const updatedProduct = { ...updatedCart[index] };
        updatedProduct.quantity = quantity;

        updatedCart[index] = updatedProduct;

        setCart(updatedCart);
    };

    useEffect(() => {
        let totalPrice = 0;
        cart.forEach((product) => {
            totalPrice += product.price * product.quantity;
        });
        setTotal(totalPrice);
    }, [cart]);

    const generateWhatsAppMessage = () => {
        // Generar el mensaje de WhatsApp con los detalles del carrito
        let message = 'Hola, estoy interesado en estos productos:';
        cart.forEach((product) => {
            message += `\n${product.name} - Cantidad: ${product.quantity} - Precio: $${product.price * product.quantity}`;
        });
        message += `\nTotal: $${total}`;

        // En este ejemplo, se abre un enlace con el mensaje de WhatsApp
        const whatsappLink = `https://wa.me/573005710804?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink);
    };

    return (
        <div className="m-5 p-2 border border-gray-300 rounded bg-gray-100 shadow-md">
            <h2 className="text-2xl font-bold mb-2">Carrito de compras</h2>
            {cart.map((product, index) => (
                <div key={index} className="flex items-center mb-2 bg-white p-2 rounded shadow-md">
                    <img src={product.image} alt={product.name} className="w-24 h-24 mr-5 rounded" />

                    <h3 className="text-xl font-semibold">{product.name}</h3>

                    <p className="ml-2">{product.quantity}</p>
                    <p className="ml-2">${product.price}</p>

                    <div className="ml-2">
                        <input
                            type="number"
                            value={product.quantity}
                            onChange={(e) => updateProductQuantity(index, Number(e.target.value))}
                            min={1}
                            className="border border-gray-300 rounded p-1"
                        />
                        <button onClick={() => removeProduct(index)} className="ml-2 bg-red-500 text-white rounded p-1">Eliminar</button>
                    </div>
                </div>
            ))}
            <p className="mt-2">Total: ${total}</p>
            <button onClick={generateWhatsAppMessage} className="mt-5 bg-green-500 text-white rounded p-2 cursor-pointer shadow-md">Pagar por WhatsApp</button>
        </div>
    );
};

export default Cart;


