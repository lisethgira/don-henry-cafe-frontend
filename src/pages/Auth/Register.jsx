import { useState } from "react";
//Dependencies
import Player from "react-lottie-player";

//Components
import NavAuth from "../../components/navAuth";
import Footer from "../../components/footer";

//Images
import Logo from "../../assets/images/logo.png";
import cafe2 from "../../assets/lotties/cafe2.json";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import Validation from "./services/validationRegister";

const Register = () => {
  const [values, SetValues] = useState({
    name: "",
    firstLastname: "",
    secondLastname: "",
    email: "",
    cellphone: "",
    whatsapp: "",
    password: "",
    passwordConfirm: "",
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    const { name, value } = event.target;
    SetValues((prev) => ({
      ...prev,
      [name]: value,
      whatsapp: prev.isSameNumber === "true" ? value : prev.whatsapp,
    }));
  };

  const handleTogglePasswordConfirm = () => {
    SetValues((prev) => ({
      ...prev,
      showPasswordConfirm: !prev.showPasswordConfirm,
    }));
  };

  const handleTogglePassword = () => {
    SetValues((prev) => ({
      ...prev,
      showPassword: !prev.showPassword,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };

  return (
    <>
      <NavAuth />
      <div className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          <Player play loop animationData={cafe2} style={{ width: "400px" }} />
        </div>
        <div className="md:w-1/3 max-w-sm">
          <div className="text-center">
            <p className="text-lg font-semibold mb-4">Registro</p>
          </div>
          <div className="my-2 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <img src={Logo} alt="Logo" className="mx-auto h-16 w-16 mb-4" />
          </div>
          <form action="" onSubmit={handleSubmit}>
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
              name="email"
              type="text"
              placeholder="Correo electrónico"
              onChange={handleInput}
            />
            <span>
              {errors.email && (
                <span className="text-red-600"> {errors.email}</span>
              )}
            </span>
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              name="name"
              type="text"
              placeholder="Nombre"
              onChange={handleInput}
            />
            <span>
              {errors.name && (
                <span className="text-red-600"> {errors.name}</span>
              )}
            </span>
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              name="firstLastname"
              type="text"
              placeholder="Primer Apellido"
              onChange={handleInput}
            />
            <span>
              {errors.firstLastname && (
                <span className="text-red-600"> {errors.firstLastname}</span>
              )}
            </span>
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              name="secondLastname"
              type="text"
              placeholder="Segundo Apellido"
              onChange={handleInput}
            />
            <span>
              {errors.secondLastname && (
                <span className="text-red-600"> {errors.secondLastname}</span>
              )}
            </span>
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              name="cellphone"
              type="phone"
              placeholder="Teléfono"
              onChange={handleInput}
            />
            <span>
              {errors.cellphone && (
                <span className="text-red-600"> {errors.cellphone}</span>
              )}
            </span>
            {values.cellphone && (
            <div>
            <h4 className="mt-3"> ¿el número de telefóno y whatsapp son iguales? </h4>
            <select
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              name="isSameNumber"
              onChange={handleInput}
            >
              <option value={true}>Sí, es el mismo número</option>
              <option value={false}>No, son diferentes números</option>
            </select>
            </div>)}
            {values.isSameNumber === "false" && (
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              name="whatsapp"
              type="phone"
              placeholder="Whatsapp"
              onChange={handleInput}
            />)}
            <span>
              {errors.whatsapp && (
                <span className="text-red-600"> {errors.whatsapp}</span>
              )}
            </span>
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
            <div className="relative">
              <input
                className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                name="passwordConfirm"
                type={values.showPasswordConfirm ? "text" : "password"}
                placeholder="Confirmar contraseña"
                onChange={handleInput}
              />
              <div
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                onClick={handleTogglePasswordConfirm}
              >
                {values.showPasswordConfirm ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <span>
              {errors.passwordConfirm && (
                <span className="text-red-600"> {errors.passwordConfirm}</span>
              )}
            </span>
            <div className="text-center md:text-left">
              <button
                className="mt-4 btn bg-secondary px-4 py-2 text-tertiary uppercase rounded text-xs tracking-wider"
                type="submit"
              >
                Registrarse
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
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
