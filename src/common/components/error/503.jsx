import { Link } from "react-router-dom";

//Componentes de Lottie-player
import Player from "react-lottie-player";

//Images
import error503 from "../../../assets/lotties/error503.json";

const Maintenance = () => {
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="px-4 lg:py-12">
          <div className="lg:gap-4 lg:flex">
            <div className="mt-20 flex flex-col items-center justify-center md:py-24 lg:py-32">
              <div className="mb-8 text-center text-gray-500 md:text-lg">
                <p>La página a la que esta intentado acceder,</p>
                <p>se encuentra en construcción o fuera de servicio,</p>
                <p>contacta con el área de soporte para más información.</p>
              </div>
              <Link
                to="/"
                className="px-5 py-2 rounded-md text-blue-100 bg-tertiary hover:bg-quartenary"
              >
                Ir al inicio
              </Link>
            </div>
            <div>
              <div className="md:w-1/3 max-w-sm">
                <Player
                  play
                  loop
                  animationData={error503}
                  style={{ width: "400px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maintenance;
