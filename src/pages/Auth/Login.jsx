import { useState } from 'react'
//Dependencies
import Player from "react-lottie-player";

//Components
import NavAuth from "../../components/navAuth";
import Footer from "../../components/footer";

//Images
import Logo from "../../assets/images/logo.png";
import cafe from "../../assets/lotties/cafe.json";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import Validation from './services/validationLogin';

const Login = () => {

  const [values, SetValues] = useState({
    email:'',
    password:''
  })


  const[errors, setErrors] = useState({

  })

  const handleTogglePassword = () => {
    SetValues((prev) => ({
      ...prev,
      showPassword: !prev.showPassword,
    }));
  };

  const handleInput = (event) => {
    SetValues(prev => ({...prev,[event.target.name]: [event.target.vlaue]}))
  }

  const handleSubmit =(event) => {
    event.preventDefault();
    setErrors(Validation(values))
  }
  
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
          <form action="" onSubmit={handleSubmit}>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded form-control"
            name='email'
            type="email"
            placeholder="Correo electrónico"
            onChange={handleInput}
          />
          <span>{errors.email && <span className='text-red-600'> {errors.email}</span>}</span>
          <div className="relative">
              <input
                className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                name="password"
                type={values.showPassword ? "text" : "password"}
                placeholder="Contraseña"
                onChange={handleInput}
              />
              <div
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                onClick={handleTogglePassword}
              >
                {values.showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <span>
              {errors.password && (
                <span className="text-red-600"> {errors.password}</span>
              )}
            </span>
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
              Iniciar Sesión
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
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
