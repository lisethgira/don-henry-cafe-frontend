function Validation(values) {
    let errors = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    const cellphonePattern = /^(?:(?:\+57)|(?:0057)|(?:57))?([1-9][0-9]{9})$/;
  
    if (values.name === "") {
      errors.name = "El nombre no debe estar vacío";
    } else {
      errors.name = "";
    }
  
    if (values.firstLastname === "") {
      errors.firstLastname = "El primer apellido no debe estar vacío";
    } else {
      errors.firstLastname = "";
    }
  
    if (values.secondLastname === "") {
      errors.secondLastname = "El segundo apellido no debe estar vacío";
    } else {
      errors.secondLastname = "";
    }
  
    if (values.email === "") {
      errors.email = "El correo electrónico no debe estar vacío";
    } else if (!email_pattern.test(values.email)) {
      errors.email = "El correo electrónico no es válido";
    } else {
      errors.email = "";
    }
  
    // if (values.cellphone === "") {
    //   errors.cellphone = "El número de teléfono no debe estar vacío";
    // } else {
    //   errors.cellphone = "";
    // }
  
    // if (values.whatsapp === "") {
    //   errors.whatsapp = "El número de WhatsApp no debe estar vacío";
    // } else {
    //   errors.whatsapp = "";
    // }

    if (values.cellphone === "") {
        errors.cellphone = "El número de celular no debe estar vacío";
      } else if (!cellphonePattern.test(values.cellphone)) {
        errors.cellphone = "El formato del número de celular colombiano no es válido";
      } else {
        errors.cellphone = "";
      }
    
      if (values.isSameNumber === "false" && values.whatsapp === "") {
        errors.whatsapp = "El número de WhatsApp no debe estar vacío";
      } else if (values.isSameNumber === "false" && !cellphonePattern.test(values.whatsapp)) {
        errors.whatsapp = "El formato del número de WhatsApp colombiano no es válido";
      } else {
        errors.whatsapp = "";
      }
        
    if (values.password === "") {
      errors.password = "La contraseña no debe estar vacía";
    } else if (!password_pattern.test(values.password)) {
      errors.password =
        "La contraseña debe contener al menos 8 caracteres, incluyendo al menos un número, una letra minúscula y una letra mayúscula";
    } else {
      errors.password = "";
    }
  
    if (values.passwordConfirm === "") {
      errors.passwordConfirm = "La confirmación de la contraseña no debe estar vacía";
    } else if (values.password !== values.passwordConfirm) {
      errors.passwordConfirm = "Las contraseñas no coinciden";
    } else {
      errors.passwordConfirm = "";
    }
  
    return errors;
  }
  
  export default Validation;
  