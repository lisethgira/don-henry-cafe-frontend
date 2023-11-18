import Navbar from '../components/navbar';
import ImageSlider from '../components/ImageSlider';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='bg-yellow-900 text-white min-h-screen flex justify-center items-center'>
        <div className='container mx-6'>
          <ImageSlider />
          <h1 className='text-4xl font-bold text-center my-4 text-black'>Bienvenido a Don Henry Café</h1>
          <p className='text-center text-lg text-black mb-8'>
            Descubre nuestra variedad de cafés de origen único, aprende sobre su proceso de elaboración y disfruta de la experiencia de degustar los mejores cafés de Colombia.
          </p>
          <div className='mt-8 bg-white p-6 rounded-lg shadow-2xl border-2 border-gray-300 relative'>
            <h2 className='text-2xl font-bold mb-4 text-yellow-900'>Quiénes Somos</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              <span className="font-bold">
                En el corazón de Medellín, en el concurrido Centro Comercial Los Molinos, se encuentra Don Henry Café, un rincón acogedor que destaca entre la multitud. La historia de este lugar tan especial está entrelazada con la determinación y la pasión de su fundador, Henry González.
              </span>
              {/* Resto de la historia aquí */}
            </p>
            <div className='mt-4 relative' style={{ width: '854px', height: '480px', backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', display: 'flex', justifyContent: 'center', margin: '0 auto' }}>
              <video src="/videos/henrrycafe.mp4" autoPlay loop controls className='w-full h-full'></video>
            </div>
          </div>

          {/* Primer comentario */}
          <div className='mt-8 flex justify-between space-x-4'>
            <div className='bg-gray-200 p-4 rounded-lg w-full'>
              <div className='flex items-center mb-2'>
                <img src='/src/assets/icons/user.svg' alt='Avatar' className='h-8 w-8 rounded-full mr-2' />
                <h3 className='text-xl font-bold text-black'>Karina</h3>
              </div>
              <p className='text-gray-700'> ¡Café de primera calidad en un ambiente acogedor! ¡Recomiendo probar su café especial!</p>
              {/* Sistema de estrellas */}
              <div className='flex items-center mt-2'>
                <span role='img' aria-label='star' className='text-yellow-400'>⭐️</span>
                <span role='img' aria-label='star' className='text-yellow-400'>⭐️</span>
                <span role='img' aria-label='star' className='text-yellow-400'>⭐️</span>
                <span role='img' aria-label='star' className='text-yellow-400'>⭐️</span>
                <span role='img' aria-label='star' className='text-gray-400'>⭐️</span>
              </div>
            </div>
            {/* Segundo comentario */}
            <div className='bg-gray-200 p-4 rounded-lg w-full'>
              <div className='flex items-center mb-2'>
                <img src='/src/assets/icons/user.svg' alt='Avatar' className='h-8 w-8 rounded-full mr-2' />
                <h3 className='text-xl font-bold text-black'>Liseth</h3>
              </div>
              <p className='text-gray-700'>Increíble experiencia en Don Henry Café. ¡El aroma y sabor de su café me transportan</p>
              {/* Sistema de estrellas */}
              <div className='flex items-center mt-2'>
                <span role='img' aria-label='star' className='text-yellow-400'>⭐️</span>
                <span role='img' aria-label='star' className='text-yellow-400'>⭐️</span>
                <span role='img' aria-label='star' className='text-yellow-400'>⭐️</span>
                <span role='img' aria-label='star' className='text-gray-400'>⭐️</span>
                <span role='img' aria-label='star' className='text-gray-400'>⭐️</span>
              </div>
            </div>

            {/* Tercer comentario */}
            <div className='bg-gray-200 p-4 rounded-lg w-full'>
              <div className='flex items-center mb-2'>
                <img src='/src/assets/icons/user.svg' alt='Avatar' className='h-8 w-8 rounded-full mr-2' />
                <h3 className='text-xl font-bold text-black'>Raul</h3>
              </div>
              <p className='text-gray-700'>Atención excepcional y café exquisito. ¡Volveré por más de su café de especialidad!</p>
              {/* Sistema de estrellas */}
              <div className='flex items-center mt-2'>
                <span role='img' aria-label='star' className='text-yellow-400'>⭐️</span>
                <span role='img' aria-label='star' className='text-yellow-400'>⭐️</span>
                <span role='img' aria-label='star' className='text-yellow-400'>⭐️</span>
                <span role='img' aria-label='star' className='text-yellow-400'>⭐️</span>
                <span role='img' aria-label='star' className='text-gray-400'>⭐️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
















