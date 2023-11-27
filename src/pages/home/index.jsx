// import { useState, useMapEvents } from "react";

import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// imagenes
import cliente from "../../assets/images/cliente.jpeg";
import logo from "../../assets/images/logo.png";

//video
import video from "../../assets/videos/henrrycafe.mp4";

const Home = () => {
  const position = [6.233329974888954, -75.6041478181902];

  return (
    <>
      <div className="flex flex-col">
        {/* Sección Hero */}
        <section className="pt-20 pb-6 bg-gray-100">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Bienvenido a Don Henry Café
            </h1>
            <p className="text-2xl text-gray-800">
              Café colombiano de calidad superior, en un acogedor espacio para
              amantes del buen café.
            </p>
            <Link to="/productos" className="btn btn-primary mt-6">
              Ver Productos
            </Link>
          </div>
        </section>

        {/* Sección Quiénes Somos */}
        <section className="py-20 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 text-primary">
                Quiénes Somos
              </h2>
              <p className="text-gray-500">Conoce nuestra historia</p>
            </div>

            <div className="md:flex gap-10">
              <div className="mb-6 md:mb-0 md:w-1/2 text-justify">
                <span className="block text-3xl lg:text-4xl font-bold text-gray-900 mb-4"></span>
                <p className="mb-4">
                  {" "}
                  Sumérgete en nuestro mundo y descubre una amplia gama de cafés
                  de origen único, cuidadosamente seleccionados de las mejores
                  cosechas de Colombia. Desde los exuberantes paisajes
                  montañosos hasta las manos expertas que cultivan y procesan
                  estos granos, cada taza de café que servimos cuenta una
                  historia de pasión y calidad inigualable.
                </p>

                <p className="mb-4">
                  En Don Henry Café, no solo te ofrecemos una experiencia de
                  degustación excepcional, sino que también te invitamos a
                  explorar y aprender sobre el arte detrás de cada taza.
                  Nuestros expertos baristas te guiarán a través del proceso de
                  elaboración, desde la cosecha hasta la preparación, revelando
                  los secretos que hacen que nuestros cafés sean únicos en sabor
                  y aroma.
                </p>

                <p className="mb-4">
                  Además de deleitarte con nuestra selección exclusiva de cafés,
                  podrás disfrutar de un ambiente acogedor y relajante que
                  complementa a la perfección la experiencia sensorial que
                  ofrecemos. Desde los momentos íntimos de la primera taza del
                  día hasta las conversaciones animadas en una tarde soleada,
                  Don Henry Café es el lugar donde los apasionados del café
                  encuentran su hogar.
                </p>

                <p>
                  Te invitamos a sumergirte en el mundo del café en Don Henry
                  Café y a disfrutar de una experiencia que estimulará tus
                  sentidos, alimentará tu curiosidad y te llevará en un viaje
                  sensorial por los sabores auténticos de Colombia.
                </p>

                <p className="text-gray-700 leading-relaxed mt-8">
                  <span className="font-bold">
                    En el corazón de Medellín, en el concurrido Centro Comercial
                    Los Molinos, se encuentra Don Henry Café, un rincón acogedor
                    que destaca entre la multitud. La historia de este lugar tan
                    especial está entrelazada con la determinación y la pasión
                    de su fundador, Henry González.
                  </span>
                  {/* Resto de la historia aquí */}
                </p>
              </div>

              <div className="md:w-1/2">
                <div className="relative h-64 overflow-hidden rounded-lg mb-6">
                  <img
                    src={cliente}
                    alt="Imagen café"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div
                  className="relative overflow-hidden w-full"
                  style={{ height: "500px", width: "750px" }}
                >
                  <img src={logo} alt="Vista previa del video" />
                  <video
                    className="absolute top-0 left-0 w-full h-full"
                    controls
                    muted
                  >
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>

            <div className="text-center pt-16">
              <Link to="/about" className="btn btn-primary">
                Conocer Más
              </Link>
            </div>
          </div>
        </section>

        {/* Sección Comentarios */}
        <section className="my-8">
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
                      className={`text-yellow-400 ${
                        starIndex < 4 ? "mr-1" : ""
                      }`}
                    >
                      ⭐️
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección Mapa */}
        <section>
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={true}
            style={{
              height: "400px",
              width: "100%",
              margin: "10px 0px 50px 0px",
              backgroundColor: "lightgray",
            }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                <div className="text-center">
                  <h2 className="mb-2 text-lg font-bold">Don Henry Café</h2>
                  <p className="mb-1">
                    <strong>Ubicación:</strong> Centro Comercial los Molinos,Piso 8
                  </p>
                  <p className="mb-1">
                    <strong>Dirección:</strong> Cl. 30A #82A-26, Medellín,
                    Belén, Medellín, Antioquia
                  </p>
                  <p className="mb-1">
                    <strong>Contacto:</strong> 300 5710804
                  </p>
                  <p className="mb-1">
                    <strong>Correo:</strong> infotintico@gmail.com
                  </p>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </section>
      </div>
    </>
  );
};

export default Home;
