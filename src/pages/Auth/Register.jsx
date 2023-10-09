import React, { useState } from "react";

import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

import icon from "../../assets/donHenryCafe.png";
import { register } from "../../utils/dataProvider/auth";
import useDocumentTitle from "../../utils/documentTitle";

const Register = () => {
  useDocumentTitle("Register");

  const controller = React.useMemo(() => new AbortController(), []);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = React.useState({
    email: "",
    password: "",
    phoneNumber: "",
  });

  const [error, setError] = React.useState({
    email: "",
    password: "",
    phoneNumber: "",
  });

  function registerHandler(e) {
    e.preventDefault(); // preventing default submit
    toast.dismiss(); // dismiss all toast notification

    const valid = { email: "", password: "", phoneNumber: "" };
    const emailRegex =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;
    const passRegex = /^(?=.*[0-9])(?=.*[a-z]).{8,}$/g;
    const phoneRegex =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;

    // email validation
    if (!form.email) valid.email = "Input your email address";
    else if (!form.email.match(emailRegex))
      valid.email = "Invalid email address";

    // password validation
    if (!form.password) valid.password = "Input your password";
    else if (form.password.length < 8)
      valid.password = "Password length minimum is 8";
    else if (!form.password.match(passRegex))
      valid.password = "Password must be combination alphanumeric";

    // phone validation
    if (!form.phoneNumber) valid.phoneNumber = "Input your phone number";
    else if (!form.phoneNumber.match(phoneRegex))
      valid.phoneNumber = "Invalid phone number";

    setError({
      email: valid.email,
      password: valid.password,
      phoneNumber: valid.phoneNumber,
    });

    if (valid.email == "" && valid.password == "" && valid.phoneNumber == "") {
      setIsLoading(true);
      e.target.disabled = true;
      toast.promise(
        register(form.email, form.password, form.phoneNumber, controller).then(
          (res) => {
            e.target.disabled = false;
            setIsLoading(false);
            return res.data.msg;
          }
        ),
        {
          loading: "Please wait a moment",
          success: () => {
            navigate("/auth/login", {
              replace: true,
            });
            return "Register successful! You can login now";
          },
          error: ({ response }) => {
            setIsLoading(false);
            e.target.disabled = false;

            return response.data.msg;
          },
        },
        { success: { duration: Infinity }, error: { duration: Infinity } }
      );
    }
  }

  function onChangeForm(e) {
    return setForm((form) => {
      return {
        ...form,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <>
      <header className="flex justify-center items-center mb-10">
        <Link to="/">
          <div className="font-extrabold flex flex-col items-center justify-center gap-4 text-center">
            <img src={icon} alt="logo" width="65px" />
            <h1 className="text-xl text-black font-semibold">Don Henry Café.</h1>
          </div>
        </Link>
      </header>

      <section className="mt-16">
        <form className="space-y-4 md:space-y-4 relative">
          <div>
            <label
              name="email"
              htmlFor="email"
              className="text-[#4F5665] font-bold"
            >
              Dirección de correo electrónico :
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className={
                `border-gray-400 border-2 rounded-2xl p-3 w-full mt-2` +
                (error.email != "" ? " border-red-500" : "")
              }
              placeholder="Ingrese su dirección de correo electrónico"
              value={form.email}
              onChange={onChangeForm}
            />
            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1 h-4">
              {error.email != "" ? error.email : ""}
            </span>
          </div>
          <div>
            <label
              name="password"
              htmlFor="password"
              className="text-[#4F5665] font-bold"
            >
              Contraseña :
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className={
                `border-gray-400 border-2 rounded-2xl p-3 w-full mt-2` +
                (error.password != "" ? " border-red-500" : "")
              }
              placeholder="Ingresa tu contraseña"
              value={form.password}
              onChange={onChangeForm}
            />
            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1 h-4">
              {error.password != "" ? error.password : ""}
            </span>
          </div>
          <div>
            <label
              name="phoneNumber"
              htmlFor="phoneNumber"
              className="text-[#4F5665] font-bold"
            >
              Número de teléfono :
            </label>
            <input
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              className={
                `border-gray-400 border-2 rounded-2xl p-3 w-full mt-2` +
                (error.phoneNumber != "" ? " border-red-500" : "")
              }
              placeholder="Ingrese su número telefónico"
              value={form.phoneNumber}
              onChange={onChangeForm}
            />
            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1 h-4">
              {error.phoneNumber != "" ? error.phoneNumber : ""}
            </span>
          </div>
          <button
            type="submit"
            className={
              (isLoading
                ? "cursor-not-allowed bg-secondary-200"
                : "cursor-pointer bg-secondary") +
              " w-full text-tertiary  focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-2xl text-lg p-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 shadow-xl inline-flex items-center justify-center transition ease-in-out duration-150 hover:bg-secondary-200"
            }
            onClick={registerHandler}
          >
            {isLoading ? (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              ""
            )}
            Inscribirse
          </button>

          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-full h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
            <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 w-64 text-center">
              ¿Ya tienes una cuenta?
            </span>
          </div>
          <Link to="/auth/login">
            <button className="w-full text-white bg-tertiary focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-2xl text-lg p-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 shadow-xl lg:mb-20">
              Entre aquí
            </button>
          </Link>
        </form>
      </section>
    </>
  );
};

export default Register;
