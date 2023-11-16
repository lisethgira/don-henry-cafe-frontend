//components
import  Navbar  from '../../components/navbar'
import cafe_rojo from '../../assets/images/cafe_rojo.PNG';
import cafe_suave from '../../assets/images/cafe_suave.PNG';
import kit_cafetero from '../../assets/images/kit_cafetero.jpg'

const Products = () => {
    // Aquí es donde defines tus productos
    const products = [
        { id: 1, name: 'Cafe De Frutos Rojos', description: 'Deléitate con nuestro café de frutos rojos de Andes, Antioquia. Esta mezcla única ofrece una experiencia sensorial: sabores dulces y afrutados se entrelazan en cada sorbo, destacando la acidez vibrante y la suavidad sedosa. Proveniente de las montañas de Colombia,', image: cafe_rojo, price: '20.000' },
        { id: 2, name: 'Cafe Suave', description: 'Prueba nuestro Café Suave  un equilibrio perfecto entre un espresso suave y un toque de leche vaporizada. Experimenta la armonía entre la intensidad del café y la cremosidad sutil en cada sorbo', image: cafe_suave , price: '20.000' },
        { id: 2, name: 'Kit cafetero', description: 'El kit cafetero colombiano es una experiencia completa que celebra el café premium de Colombia. Incluye granos selectos, tazas auténticas y una prensa francesa para disfrutar la esencia del café colombiano en casa', image: kit_cafetero , price: '50.000' },
        // Agrega más productos según lo necesites
    ];

    return (
      <>
      <Navbar />
      <div className='container mx-auto px-6'>
      <h1 className="text-3xl font-bold text-center mb-4 text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Nuestros Productos</h1>
      {/* Aquí es donde renderizas tus productos */}
      {products.map((product, index) => (
          <div key={product.id} className={`max-w-sm mx-auto mt-5 ${index === 0 ? 'mt-10' : ''} bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110`}>
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img className="h-48 w-full object-cover md:w-48" src={product.image} alt={product.name} />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{product.name}</div>
                  <p className="mt-2 text-gray-500">{product.description}</p>
                  <div className="mt-2 text-gray-500 font-bold">${product.price}</div>
                </div>
              </div>
          </div>
      ))}
      </div>
      </>
    );}

export default Products;