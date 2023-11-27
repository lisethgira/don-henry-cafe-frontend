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
import cafe2 from "../../assets/lotties/cafe2.json";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  //===============================================================================================================================================
  //========================================== Context ============================================================================================
  //===============================================================================================================================================
  const { token, handlerChangeData } = useContext(AuthContext);

  //===============================================================================================================================================
  //========================================== Hooks personalizados ===============================================================================
  //===============================================================================================================================================
  const {
    control,
    formState: { errors },
    setValue,
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
    strNames: "",
    strFirstLastName: "",
    strSecondLastName: "",
    strEmail: "",
    strPhoneNumber: "",
    bitSameNumber: true,
    strNumberWhatsapp: "",
    strPassword: "",
    strPasswordConfirm: "",
  });

  //===============================================================================================================================================
  //========================================== Funciones  =========================================================================================
  //===============================================================================================================================================
  const handleTogglePasswordConfirm = () => {
    setData((prev) => ({
      ...prev,
      showPasswordConfirm: !prev.showPasswordConfirm,
    }));
  };

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
          url: `${import.meta.env.VITE_REACT_APP_API_DONHENRYCAFE_REGISTER}`,
          data: data,
          transformRequest: [
            (data) => {
              let newData = {
                ...data,
                strLastNames: `${data?.strFirstLastName.trim()} ${data?.strSecondLastName.trim()}`,
                strNumberWhatsapp: data?.strNumberWhatsapp
                  ? data.strNumberWhatsapp
                  : null,
              };
              return JSON.stringify(newData);
            },
          ],
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

          handlerChangeDataRef.current("token", res.data.data.token);

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
    return <Navigate to="/" />;
  }

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
            {/* Controller del campo Nombres */}
            <Controller
              id="txt_strNames"
              name="strNames"
              defaultValue={data.strNames}
              render={({ field: { name, value, onChange } }) => (
                <input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                  name={name}
                  value={value}
                  disabled={loading}
                  type="text"
                  placeholder="Nombres"
                  onChange={(e) => onChange(e)}
                />
              )}
              control={control}
              rules={{
                required: "Por favor digita tu nombre",
                validate: (value) => {
                  if (validator.isLength(value, { min: 100 })) {
                    return "El campo nombre debe ser menor a 100 caracteres";
                  }
                },
              }}
            />
            <span>
              {errors?.strNames && (
                <span className="text-red-600">
                  {" "}
                  {errors?.strNames?.message}
                </span>
              )}
            </span>
            {/* Controller del campo Primer apellido */}
            <Controller
              id="txt_strFirstLastName"
              name="strFirstLastName"
              defaultValue={data.strFirstLastName}
              render={({ field: { name, value, onChange } }) => (
                <input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                  name={name}
                  value={value}
                  disabled={loading}
                  type="text"
                  placeholder="Primer Apellido"
                  onChange={(e) => onChange(e)}
                />
              )}
              control={control}
              rules={{
                required: "Por favor digita tu primer apellido",
                validate: (value) => {
                  if (validator.isLength(value, { min: 100 })) {
                    return "El campo primer apellido debe ser menor a 100 caracteres";
                  }
                },
              }}
            />
            <span>
              {errors?.strFirstLastName && (
                <span className="text-red-600">
                  {" "}
                  {errors?.strFirstLastName?.message}
                </span>
              )}
            </span>
            {/* Controller del campo Segundo apellido */}
            <Controller
              id="txt_strSecondLastName"
              name="strSecondLastName"
              defaultValue={data.strSecondLastName}
              render={({ field: { name, value, onChange } }) => (
                <input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                  name={name}
                  value={value}
                  disabled={loading}
                  type="text"
                  placeholder="Segundo Apellido"
                  onChange={(e) => onChange(e)}
                />
              )}
              control={control}
              rules={{
                required: "Por favor digita tu segundo apellido",
                validate: (value) => {
                  if (validator.isLength(value, { min: 100 })) {
                    return "El campo segundo apellido debe ser menor a 100 caracteres";
                  }
                },
              }}
            />
            <span>
              {errors?.strSecondLastName && (
                <span className="text-red-600">
                  {" "}
                  {errors?.strSecondLastName?.message}
                </span>
              )}
            </span>
            {/* Controller del campo Numero de celular */}
            <Controller
              id="txt_strPhoneNumber"
              name="strPhoneNumber"
              defaultValue={data.strPhoneNumber}
              render={({ field: { name, value, onChange } }) => (
                <input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                  name={name}
                  value={value}
                  disabled={loading}
                  type="phone"
                  placeholder="Teléfono"
                  onChange={(e) => {
                    onChange(e);
                    setData((prevState) => ({
                      ...prevState,
                      strPhoneNumber: e.target.value,
                    }));
                  }}
                />
              )}
              control={control}
              rules={{
                required: "Por favor digita tu número de celular",
                validate: (value) => {
                  if (!validator.isMobilePhone(value, "es-CO")) {
                    return "El formato del número de celular no es válido";
                  }
                },
              }}
            />
            <span>
              {errors?.strPhoneNumber && (
                <span className="text-red-600">
                  {" "}
                  {errors?.strPhoneNumber?.message}
                </span>
              )}
            </span>

            {data?.strPhoneNumber && (
              <div>
                <h4 className="mt-3">
                  {" "}
                  ¿el número de telefóno y whatsapp son iguales?{" "}
                </h4>
                {/* Controller del Select */}
                <Controller
                  id="select_bitSameNumber"
                  name="bitSameNumber"
                  defaultValue={data?.bitSameNumber}
                  render={({ field: { name, value, onChange } }) => (
                    <select
                      className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                      name={name}
                      value={value}
                      disabled={loading}
                      onChange={(e) => {
                        onChange(e);
                        setData((prevState) => ({
                          ...prevState,
                          bitSameNumber: e.target.value,
                        }));
                        setValue("strNumberWhatsapp");
                      }}
                    >
                      <option value={true}>Sí, es el mismo número</option>
                      <option value={false}>No, son diferentes números</option>
                    </select>
                  )}
                  control={control}
                />
              </div>
            )}
            {/* Controller del numero de whatsapp*/}
            {data.bitSameNumber === "false" && (
              <Controller
                id="txt_strNumberWhatsapp"
                name="strNumberWhatsapp"
                defaultValue={data.strNumberWhatsapp}
                render={({ field: { name, value, onChange } }) => (
                  <input
                    className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                    name={name}
                    value={value}
                    disabled={loading}
                    type="phone"
                    placeholder="Whatsapp"
                    onChange={onChange}
                  />
                )}
                control={control}
                rules={{
                  required: "Por favor digita tu número de celular",
                  validate: (value) => {
                    if (!validator.isMobilePhone(value, "es-CO")) {
                      return "El formato del número de WhatsApp no es válido";
                    }
                  },
                }}
              />
            )}
            <span>
              {errors.strNumberWhatsapp && (
                <span className="text-red-600">
                  {" "}
                  {errors.strNumberWhatsapp.message}
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
                validate: (value) => {
                  if (
                    !validator.isStrongPassword(value, {
                      minLength: 8,
                      minSymbols: 1,
                      minNumbers: 1,
                      minUppercase: 1,
                    })
                  ) {
                    return "La contraseña no cumple con el formato requerido. la contraseñe debe ser de 8 caracteres minimo y debe tener una letra Mayuscula, un numero y un simbolo como minimo";
                  }
                },
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
            {/* Controller de la contraseña*/}
            <Controller
              id="txt_strPasswordConfirm"
              name="strPasswordConfirm"
              defaultValue={data?.strPasswordConfirm}
              render={({ field: { name, value, onChange } }) => (
                <div className="relative">
                  <input
                    className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                    name={name}
                    value={value}
                    disabled={loading}
                    type={data.showPasswordConfirm ? "text" : "password"}
                    placeholder="Contraseña"
                    onChange={(e) => {
                      onChange(e);
                      setData((prevState) => ({
                        ...prevState,
                        strPasswordConfirm: e.target.value,
                      }));
                    }}
                  />
                  <div
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                    onClick={handleTogglePasswordConfirm}
                  >
                    {data.showPasswordConfirm ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
              )}
              control={control}
              rules={{
                required:
                  "La confirmación de la contraseña no debe estar vacía",
                validate: (value) => {
                  if (value !== data.strPassword) {
                    return "Las contraseñas no coinciden";
                  }
                },
              }}
            />
            <span>
              {errors.strPasswordConfirm && (
                <span className="text-red-600">
                  {" "}
                  {errors.strPasswordConfirm.message}
                </span>
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
