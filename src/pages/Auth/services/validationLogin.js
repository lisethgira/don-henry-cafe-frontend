function Validation(values) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  let errors = {};

  if (values.email === "") {
    errors.email = "El correo electrónico no debe estar vacío";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "El formato del correo electrónico no es válido";
  } else {
    errors.email = "";
  }

  if (values.password === "") {
    errors.password = "La contraseña no debe estar vacía";
  } else if (!passwordPattern.test(values.password)) {
    errors.password = "La contraseña no cumple con los requisitos mínimos";
  } else {
    errors.password = "";
  }

  return errors;
}

export default Validation;
