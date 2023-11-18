import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  Navbar  from '../../components/navbar'
import cafe_rojo from '../../assets/images/cafe_rojo.PNG';
import cafe_suave from '../../assets/images/cafe_suave.PNG';
import kit_cafetero from '../../assets/images/kit_cafetero.jpg'
import { useState } from 'react';

library.add(faStar);

const Products = () => {
    const products = [
        { id: 1, name: 'Cafe De Frutos Rojos', description: 'Deléitate con nuestro café de frutos rojos de Andes, Antioquia. Esta mezcla única ofrece una experiencia sensorial: sabores dulces y afrutados se entrelazan en cada sorbo,.', image: cafe_rojo, price: '20.000', rating: 4 },
        { id: 2, name: 'Cafe Suave', description: 'Prueba nuestro Café Suave  un equilibrio perfecto entre un espresso suave y un toque de leche vaporizada. Experimenta la armonía entre la intensidad del café y la cremosidad sutil en cada sorbo', image: cafe_suave , price: '20.000', rating: 3 },
        { id: 3, name: 'Kit cafetero', description: 'El kit cafetero colombiano es una experiencia completa que celebra el café premium de Colombia. Incluye granos selectos, tazas auténticas y una prensa francesa para disfrutar la esencia del café colombiano en casa', image: kit_cafetero , price: '50.000', rating: 5 },
        { id: 1, name: 'Cafe De Frutos Rojos', description: 'Deléitate con nuestro café de frutos rojos de Andes, Antioquia. Esta mezcla única ofrece una experiencia sensorial: sabores dulces y afrutados se entrelazan en cada sorbo,.', image: cafe_rojo, price: '20.000', rating: 4 },
        { id: 2, name: 'Cafe Suave', description: 'Prueba nuestro Café Suave  un equilibrio perfecto entre un espresso suave y un toque de leche vaporizada. Experimenta la armonía entre la intensidad del café y la cremosidad sutil en cada sorbo', image: cafe_suave , price: '20.000', rating: 3 },
        { id: 3, name: 'Kit cafetero', description: 'El kit cafetero colombiano es una experiencia completa que celebra el café premium de Colombia. Incluye granos selectos, tazas auténticas y una prensa francesa para disfrutar la esencia del café colombiano en casa', image: kit_cafetero , price: '50.000', rating: 5 },
        { id: 1, name: 'Cafe De Frutos Rojos', description: 'Deléitate con nuestro café de frutos rojos de Andes, Antioquia. Esta mezcla única ofrece una experiencia sensorial: sabores dulces y afrutados se entrelazan en cada sorbo,.', image: cafe_rojo, price: '20.000', rating: 4 },
        { id: 2, name: 'Cafe Suave', description: 'Prueba nuestro Café Suave  un equilibrio perfecto entre un espresso suave y un toque de leche vaporizada. Experimenta la armonía entre la intensidad del café y la cremosidad sutil en cada sorbo', image: cafe_suave , price: '20.000', rating: 3 },
        { id: 3, name: 'Kit cafetero', description: 'El kit cafetero colombiano es una experiencia completa que celebra el café premium de Colombia. Incluye granos selectos, tazas auténticas y una prensa francesa para disfrutar la esencia del café colombiano en casa', image: kit_cafetero , price: '50.000', rating: 5 },
        { id: 1, name: 'Cafe De Frutos Rojos', description: 'Deléitate con nuestro café de frutos rojos de Andes, Antioquia. Esta mezcla única ofrece una experiencia sensorial: sabores dulces y afrutados se entrelazan en cada sorbo,.', image: cafe_rojo, price: '20.000', rating: 4 },
        { id: 2, name: 'Cafe Suave', description: 'Prueba nuestro Café Suave  un equilibrio perfecto entre un espresso suave y un toque de leche vaporizada. Experimenta la armonía entre la intensidad del café y la cremosidad sutil en cada sorbo', image: cafe_suave , price: '20.000', rating: 3 },
        { id: 3, name: 'Kit cafetero', description: 'El kit cafetero colombiano es una experiencia completa que celebra el café premium de Colombia. Incluye granos selectos, tazas auténticas y una prensa francesa para disfrutar la esencia del café colombiano en casa', image: kit_cafetero , price: '50.000', rating: 5 },
      
      
      ];

      const [cart, setCart] = useState([]);
    const [isCartVisible, setCartVisible] = useState(false);

    const addToCart = (product) => {
        setCart(currentCart => [...currentCart, product]);
        setCartVisible(true);
    };

    if (isCartVisible) {
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

    return (
      <>
        <Navbar />
        <div className='bg-yellow-900 text-white min-h-screen flex items-center justify-center'>
          <div className='container mx-auto px-4 py-6'>
            <h1 className="ml-10 text-3xl font-bold text-left mb-4 text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Nuestros Productos</h1>
            <div className="flex flex-wrap justify-center gap-4">
              {products.map((product, index) => (
                <div key={product.id} className={`w-full sm:w-1/2 lg:w-1/3 px-4 mb-4 ${index === 0 ? 'mt-6' : ''} bg-white rounded-xl shadow-md overflow-hidden md:max-w-sm hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-col`}>
                  <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src={product.image} alt={product.name} />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{product.name}</div>
                      <div className="flex items-center">
                        {[...Array(5)].map((star, i) => (
                          <FontAwesomeIcon key={i} icon="star" className={i < product.rating ? 'text-yellow-500' : 'text-gray-300'} />
                        ))}
                      </div>
                      <p className="mt-2 text-gray-500 overflow-y-auto max-h-36">{product.description}</p>
                      <div className="mt-2 text-gray-500 font-bold">${product.price}</div>
                    </div>
                    <button onClick={() => addToCart(product)} className="mt-2 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Comprar</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
}

export default Products;