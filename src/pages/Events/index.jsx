import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import eventosEmpresarialesImg from '../../assets/images/eventoempreesarial.jpg';
import matrimonioImg from '../../assets/images/matrimonio.jpg';
import eventoSocialImg from '../../assets/images/eventosocial.jpg';

const Events = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gray-100">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mt-8">HenryCafe: El lugar perfecto para tus eventos</h1>
          <p className="mt-4 text-base lg:text-lg text-gray-600">
            HenryCafe es el lugar ideal para celebrar cualquier tipo de evento. Con un ambiente elegante y acogedor, nuestro equipo profesional garantizará el éxito de tu evento.
          </p>
          {/* Eventos empresariales */}
          <div className="mt-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Eventos empresariales</h2>
            <p className="mt-4 text-base lg:text-lg text-gray-600">
              HenryCafe ofrece espacios ideales para reuniones de negocios, conferencias o lanzamientos de productos. Contamos con equipos audiovisuales de última generación y catering personalizado.
            </p>
            <div className="flex items-center justify-center mt-6 lg:mt-8">
              <img src={eventosEmpresarialesImg} alt="Eventos empresariales en HenryCafe" className="w-full h-auto sm:w-96 md:w-108 lg:w-120 xl:w-140 object-cover rounded-lg" />
            </div>
          </div>
          {/* Matrimonios */}
          <div className="mt-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Matrimonios</h2>
            <p className="mt-4 text-base lg:text-lg text-gray-600">
              HenryCafe es el lugar perfecto para celebrar tu boda de ensueño. Contamos con un salón principal con capacidad para hasta 200 invitados, así como con una terraza al aire libre para una ceremonia íntima. Nuestro equipo de profesionales te ayudará a planificar cada detalle de tu boda para que sea un día inolvidable.
            </p>
            <div className="flex items-center justify-center mt-6 lg:mt-8">
              <img src={matrimonioImg} alt="Matrimonios en HenryCafe" className="w-full h-auto sm:w-96 md:w-108 lg:w-120 xl:w-140 object-cover rounded-lg" />
            </div>
          </div>
          {/* Eventos sociales */}
          <div className="mt-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Eventos sociales</h2>
            <p className="mt-4 text-base lg:text-lg text-gray-600">
              HenryCafe es el lugar perfecto para celebrar cumpleaños, aniversarios o cualquier otra ocasión especial. Contamos con un menú variado para todos los gustos, así como con un equipo de profesionales que se encargará de que tu evento sea perfecto.
            </p>
            <div className="flex items-center justify-center mt-6 lg:mt-8">
              <img src={eventoSocialImg} alt="Eventos sociales en HenryCafe" className="w-full h-auto sm:w-96 md:w-108 lg:w-120 xl:w-140 object-cover rounded-lg" />
            </div>
          </div>
          {/* Video */}
          <div className="mt-8 relative rounded-lg overflow-hidden">
            <video
              src="/videos/evento.mp4" // Ruta al archivo de video
              loop
              controls
              autoPlay
              muted
              className="w-full h-full absolute inset-0"
            ></video>
          </div>
          <div className="mt-8">
            <button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700">Contáctanos hoy mismo</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Events;







