import { useState, useEffect, useCallback, useContext, useRef } from "react";

//Context
import { AuthContext } from "../../common/middlewares/Auth";

//Dependencies
import Player from "react-lottie-player";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useForm, Controller } from "react-hook-form";
import validator from "validator";
import { Navigate } from "react-router-dom";

//Components
import NavAuth from "../../components/navAuth";
import Footer from "../../components/footer";

//Images
import Logo from "../../assets/images/logo.png";
import cafe from "../../assets/lotties/cafe.json";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  //===============================================================================================================================================
  //========================================== Context ============================================================================================
  //===============================================================================================================================================
  const { token , handlerChangeData } = useContext(AuthContext);

  //===============================================================================================================================================
  //========================================== Hooks personalizados ===============================================================================
  //===============================================================================================================================================
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onChange" });

  //===============================================================================================================================================
  //========================================== Referencias ========================================================================================
  //===============================================================================================================================================
  const handlerChangeDataRef = useRef(handlerChangeData);

  //===============================================================================================================================================
  //========================================== Declaracion de estados =============================================================================
  //===============================================================================================================================================
  const [loading, setLoading] = useState(false);
  const [flagSubmit, setFlagSubmit] = useState(false);

  const [data, setData] = useState({
    strEmail: "",
    strPassword: "",
  });

  //===============================================================================================================================================
  //========================================== Funciones  =========================================================================================
  //===============================================================================================================================================
  const handleTogglePassword = () => {
    setData((prev) => ({
      ...prev,
      showPassword: !prev.showPassword,
    }));
  };

  const onSubmitData = (data) => {
    setData((prevState) => ({
      ...prevState,
      ...data,
    }));

    setFlagSubmit(true);
  };

  const submitData = useCallback(
    async (signalSubmitData) => {
      setLoading(true);
      setFlagSubmit(false);

      await axios(
        {
          method: "POST",
          baseURL: `${import.meta.env.VITE_REACT_APP_API_BACK_PROT}://${
            import.meta.env.VITE_REACT_APP_API_BACK_HOST
          }${import.meta.env.VITE_REACT_APP_API_BACK_PORT}`,
          url: `${import.meta.env.VITE_REACT_APP_API_DONHENRYCAFE_LOGIN}`,
          data: data,
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
        },
        {
          cancelToken: signalSubmitData.token,
        }
      )
        .then((res) => {
          if (res.data.error) {
            throw new Error(res.data.msg);
          }

          setLoading(false);

          handlerChangeDataRef.current("token", res.data.data);

          toast.success(res.data.msg);
        })
        .catch((error) => {
          if (!axios.isCancel(error)) {
            let msg;

            if (error.response) {
              msg = error.response.data.msg;
            } else if (error.request) {
              msg = error.message;
            } else {
              msg = error.message;
            }

            console.error(error, msg);
            setLoading(false);
            toast.error(msg);
          }
        });
    },
    [data]
  );

  useEffect(() => {
    let signalSubmitData = axios.CancelToken.source();
    if (flagSubmit) {
      submitData(signalSubmitData);
    }
    return () => {
      signalSubmitData.cancel("Petición abortada.");
    };
  }, [flagSubmit, submitData]);

  if (token) {
    return <Navigate  to="/" />;
  }

  return (
    <>
      <NavAuth />
      <div className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          <div className="md:w-1/3 max-w-sm">
            <Player play loop animationData={cafe} style={{ width: "400px" }} />
          </div>
        </div>
        <div className="md:w-1/3 max-w-sm">
          <div className="text-center">
            <p className="text-lg font-semibold mb-4">Inicio de Sesión</p>
          </div>
          <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <img src={Logo} alt="Logo" className="mx-auto h-20 w-20 mb-4" />
          </div>
          <form action="" onSubmit={handleSubmit(onSubmitData)}>
            {/* Controller del campo Email */}
            <Controller
              id="txt_strEmail"
              name="strEmail"
              defaultValue={data.strEmail}
              render={({ field: { name, value, onChange } }) => (
                <input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                  name={name}
                  value={value}
                  disabled={loading}
                  type="text"
                  placeholder="Correo electrónico"
                  onChange={(e) => onChange(e)}
                />
              )}
              control={control}
              rules={{
                required: "Por favor digita tu email.",
                validate: (value) => {
                  if (!validator.isEmail(value)) {
                    return "El campo debe ser de tipo email";
                  }
                },
              }}
            />
            <span>
              {errors?.strEmail && (
                <span className="text-red-600">
                  {" "}
                  {errors?.strEmail?.message}
                </span>
              )}
            </span>
            {/* Controller de la contraseña*/}
            <Controller
              id="txt_strPassword"
              name="strPassword"
              defaultValue={data?.strPassword}
              render={({ field: { name, value, onChange } }) => (
                <div className="relative">
                  <input
                    className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                    name={name}
                    value={value}
                    disabled={loading}
                    type={data.showPassword ? "text" : "password"}
                    placeholder="Contraseña"
                    onChange={(e) => {
                      onChange(e);
                      setData((prevState) => ({
                        ...prevState,
                        strPassword: e.target.value,
                      }));
                    }}
                  />
                  <div
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                    onClick={handleTogglePassword}
                  >
                    {data.showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
              )}
              control={control}
              rules={{
                required: "La contraseña no debe estar vacía",
                validate:(value)=>{
                  if (!validator.isStrongPassword(value)) {
                    return "La contraseña no cumple con el formato requerido. la contraseñe debe ser de 8 caracteres minimo"
                  }
                }
              }}
            />
            <span>
              {errors.strPassword && (
                <span className="text-red-600">
                  {" "}
                  {errors.strPassword.message}
                </span>
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
