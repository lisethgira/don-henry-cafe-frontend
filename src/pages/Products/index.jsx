import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cafe_rojo from "../../assets/images/cafe_rojo.PNG";
import cafe_suave from "../../assets/images/cafe_suave.PNG";
import kit_cafetero from "../../assets/images/kit_cafetero.jpg";
import { useState } from "react";
import Cart from "../../pages/cart/cart"; // Aquí está la importación correcta

//Components
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

library.add(faStar);

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Cafe De Frutos Rojos",
      description:
        "Deléitate con nuestro café de frutos rojos de Andes, Antioquia. Esta mezcla única ofrece una experiencia sensorial: sabores dulces y afrutados se entrelazan en cada sorbo,.",
      image: cafe_rojo,
      price: "20.000",
      rating: 4,
    },
    {
      id: 2,
      name: "Cafe Suave",
      description:
        "Prueba nuestro Café Suave  un equilibrio perfecto entre un espresso suave y un toque de leche vaporizada. Experimenta la armonía entre la intensidad del café y la cremosidad sutil en cada sorbo",
      image: cafe_suave,
      price: "20.000",
      rating: 3,
    },
    {
      id: 3,
      name: "Kit cafetero",
      description:
        "El kit cafetero colombiano es una experiencia completa que celebra el café premium de Colombia. Incluye granos selectos, tazas auténticas y una prensa francesa para disfrutar la esencia del café colombiano en casa",
      image: kit_cafetero,
      price: "50.000",
      rating: 5,
    },
    {
      id: 1,
      name: "Cafe De Frutos Rojos",
      description:
        "Deléitate con nuestro café de frutos rojos de Andes, Antioquia. Esta mezcla única ofrece una experiencia sensorial: sabores dulces y afrutados se entrelazan en cada sorbo,.",
      image: cafe_rojo,
      price: "20.000",
      rating: 4,
    },
    {
      id: 2,
      name: "Cafe Suave",
      description:
        "Prueba nuestro Café Suave  un equilibrio perfecto entre un espresso suave y un toque de leche vaporizada. Experimenta la armonía entre la intensidad del café y la cremosidad sutil en cada sorbo",
      image: cafe_suave,
      price: "20.000",
      rating: 3,
    },
    {
      id: 3,
      name: "Kit cafetero",
      description:
        "El kit cafetero colombiano es una experiencia completa que celebra el café premium de Colombia. Incluye granos selectos, tazas auténticas y una prensa francesa para disfrutar la esencia del café colombiano en casa",
      image: kit_cafetero,
      price: "50.000",
      rating: 5,
    },
    {
      id: 1,
      name: "Cafe De Frutos Rojos",
      description:
        "Deléitate con nuestro café de frutos rojos de Andes, Antioquia. Esta mezcla única ofrece una experiencia sensorial: sabores dulces y afrutados se entrelazan en cada sorbo,.",
      image: cafe_rojo,
      price: "20.000",
      rating: 4,
    },
    {
      id: 2,
      name: "Cafe Suave",
      description:
        "Prueba nuestro Café Suave  un equilibrio perfecto entre un espresso suave y un toque de leche vaporizada. Experimenta la armonía entre la intensidad del café y la cremosidad sutil en cada sorbo",
      image: cafe_suave,
      price: "20.000",
      rating: 3,
    },
    {
      id: 3,
      name: "Kit cafetero",
      description:
        "El kit cafetero colombiano es una experiencia completa que celebra el café premium de Colombia. Incluye granos selectos, tazas auténticas y una prensa francesa para disfrutar la esencia del café colombiano en casa",
      image: kit_cafetero,
      price: "50.000",
      rating: 5,
    },
    {
      id: 1,
      name: "Cafe De Frutos Rojos",
      description:
        "Deléitate con nuestro café de frutos rojos de Andes, Antioquia. Esta mezcla única ofrece una experiencia sensorial: sabores dulces y afrutados se entrelazan en cada sorbo,.",
      image: cafe_rojo,
      price: "20.000",
      rating: 4,
    },
    {
      id: 2,
      name: "Cafe Suave",
      description:
        "Prueba nuestro Café Suave  un equilibrio perfecto entre un espresso suave y un toque de leche vaporizada. Experimenta la armonía entre la intensidad del café y la cremosidad sutil en cada sorbo",
      image: cafe_suave,
      price: "20.000",
      rating: 3,
    },
    {
      id: 3,
      name: "Kit cafetero",
      description:
        "El kit cafetero colombiano es una experiencia completa que celebra el café premium de Colombia. Incluye granos selectos, tazas auténticas y una prensa francesa para disfrutar la esencia del café colombiano en casa",
      image: kit_cafetero,
      price: "50.000",
      rating: 5,
    },
  ];

  const [cart, setCart] = useState([]); // Estado para almacenar los productos agregados al carrito
  const [isCartVisible, setCartVisible] = useState(false); // Estado para mostrar u ocultar el carrito
 
  // Función para agregar un producto al carrito
  const addToCart = (product) => {
   setCart((currentCart) => [...currentCart, product]);
   setCartVisible(true); // Mostrar el carrito después de agregar un producto
  };
 
  // Si el carrito está visible, renderizar los elementos del carrito usando el componente Cart
  if (isCartVisible) {
   return <Cart cart={cart} />; // Pasar el estado del carrito al componente Cart
  }
 
  return (
   <>
     <Navbar />
     <div className="bg-gray-100 min-h-screen">
       <div className="container mx-auto px-4 py-10">
         <h1 className="text-4xl font-bold text-center mb-8 text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-2 rounded-lg shadow-md">
           Nuestros Productos
         </h1>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           {products.map((product) => (
             <div
               key={product.id}
               className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105`}
             >
               <img
                 className="h-48 w-full object-cover rounded-t-xl"
                 src={product.image}
                 alt={product.name}
               />
               <div className="p-4">
                 <div className="text-xl font-semibold text-indigo-600 mb-2">
                  {product.name}
                 </div>
                 <div className="flex items-center text-yellow-500 mb-2">
                  {[...Array(5)].map((star, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon="star"
                      className={
                        i < product.rating ? "text-yellow-500" : "text-gray-300"
                      }
                    />
                  ))}
                 </div>
                 <p className="text-gray-600 mb-4 h-20 overflow-y-auto">
                  {product.description}
                 </p>
                 <div className="text-gray-700 font-bold text-lg mb-4">
                  ${product.price}
                 </div>
                 <button
                  onClick={() => addToCart(product)}
                  className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                 >
                  Comprar
                 </button>
               </div>
             </div>
           ))}
         </div>
       </div>
     </div>
     <Footer />
   </>
  );
 };
 
 export default Products;
