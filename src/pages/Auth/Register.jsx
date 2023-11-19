//Dependency
import Lottie from "react-lottie";

//Components
import NavAuth from "../../components/navAuth";
import Footer from "../../components/footer";

//Images
import Logo from "../../assets/images/logo.png";
import cafe2 from "../../assets/lotties/cafe2.json";

const Register = () => {
  return (
    <>
      <NavAuth />
      <div className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: cafe2,
            }}
            height={400} // ajusta la altura según tus necesidades
            width={400} // ajusta el ancho según tus necesidades
          />
        </div>
        <div className="md:w-1/3 max-w-sm">
          <div className="text-center">
            <p className="text-lg font-semibold mb-4">Registro</p>
          </div>
          <div className="my-2 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <img src={Logo} alt="Logo" className="mx-auto h-16 w-16 mb-4" />
          </div>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            placeholder="Correo Electronico"
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="text"
            placeholder="Primer Nombre"
          />
           <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="text"
            placeholder="Primer Apellido"
          />
         <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="text"
            placeholder="Segundo Apellido"
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="text"
            placeholder="Telefono"
          />
           <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="text"
            placeholder="Whatsapp"
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Contraseña"
          />
           <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Confirmar contraseña"
          />
          
          <div className="text-center md:text-left">
            <button
              className="mt-4 btn bg-secondary px-4 py-2 text-tertiary uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Registrar
            </button>
          </div>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            ¿Ya tienes una cuenta?{" "}
            <a
              className="text-tertiary hover:underline hover:underline-offset-4"
              href="/login"
            >
              Iniciar Sesión
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
