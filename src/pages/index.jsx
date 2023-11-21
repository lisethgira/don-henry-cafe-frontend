import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header></Header>
      <div className="min-h-screen flex justify-center items-center bg-gray-100 py-6">
        <div className="container mx-6">
          <h1 className="text-4xl font-bold text-center my-4 text-gray-800">
            Bienvenido a Don Henry Café
          </h1>
          <p className="text-center text-lg text-gray-700 mb-8">
            Descubre nuestra variedad de cafés de origen único, aprende sobre su
            proceso de elaboración y disfruta de la experiencia de degustar los
            mejores cafés de Colombia.
          </p>
          <div className="mt-8 bg-white p-6 rounded-lg shadow-2xl border-2 border-gray-300 relative">
            <h2 className="text-2xl font-bold mb-4 text-yellow-900">
              Quiénes Somos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <span className="font-bold">
                En el corazón de Medellín, en el concurrido Centro Comercial Los
                Molinos, se encuentra Don Henry Café, un rincón acogedor que
                destaca entre la multitud. La historia de este lugar tan
                especial está entrelazada con la determinación y la pasión de su
                fundador, Henry González.
              </span>
              {/* Resto de la historia aquí */}
            </p>
            <div
              className="mt-4 relative rounded-lg overflow-hidden"
              style={{
                paddingBottom: '56.25%', // 16:9 aspect ratio for responsive video
              }}
            >
              <video
                src="public\videos\henrrycafe.mp4"
                loop
                controls
                autoPlay
                muted
                className="absolute w-full h-full"
              ></video>
            </div>
          </div>

          {/* Sección de comentarios */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-gray-200 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <img
                    src="/src/assets/icons/user.svg"
                    alt="Avatar"
                    className="h-8 w-8 rounded-full mr-2"
                  />
                  <h3 className="text-xl font-bold text-gray-800">Nombre</h3>
                </div>
                <p className="text-gray-700">
                  ¡Café de primera calidad en un ambiente acogedor! ¡Recomiendo
                  probar su café especial!
                </p>
                {/* Sistema de estrellas */}
                <div className="flex items-center mt-2">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <span
                      key={starIndex}
                      role="img"
                      aria-label="star"
                      className={`text-yellow-400 ${starIndex < 4 ? 'mr-1' : ''
                        }`}
                    >
                      ⭐️
                    </span>
                  ))}
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

export default Home;
