//Dependencies
import Player from "react-lottie-player";

//Components
import NavAuth from "../../components/navAuth";
import Footer from "../../components/footer";

//Images
import Logo from "../../assets/images/logo.png";
import cafe from "../../assets/lotties/cafe.json";

const Login = () => {
  return (
    <>
      <NavAuth />
      <div className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          <div className="md:w-1/3 max-w-sm">
            <Player play loop animationData={cafe} style={{width: '400px'}} />
          </div>
        </div>
        <div className="md:w-1/3 max-w-sm">
          <div className="text-center">
            <p className="text-lg font-semibold mb-4">Inicio de Sesión</p>
          </div>
          <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <img src={Logo} alt="Logo" className="mx-auto h-20 w-20 mb-4" />
          </div>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Password"
          />
          <div className="mt-4 flex justify-between font-semibold text-sm">
            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
              <input className="mr-1" type="checkbox" />
              <span>Recuerdame</span>
            </label>
            <a
              className="text-tertiary hover:text-primary hover:underline hover:underline-offset-4"
              href="/forgotpassword"
            >
              Olvide mi contraseña?
            </a>
          </div>
          <div className="text-center md:text-left">
            <button
              className="mt-4 btn bg-secondary px-4 py-2 text-tertiary uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Login
            </button>
          </div>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            ¿No tienes una cuenta?{" "}
            <a
              className="text-tertiary hover:underline hover:underline-offset-4"
              href="/register"
            >
              Registrate aquí
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
