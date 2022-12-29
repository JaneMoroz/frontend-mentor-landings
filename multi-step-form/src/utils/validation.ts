const validateName = (name: string) => {
  const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;

  return regName.test(name);
};

const validateEmail = (email: string) => {
  const regEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regEmail.test(email);
};

const validatePhone = (phone: string) => {
  const regPhone = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;

  return regPhone.test(phone);
};

export const validateUser = (name: string, email: string, phone: string) => {
  let errors = { state: false, name: "", email: "", phone: "" };
  if (!validateName(name))
    errors = { ...errors, state: true, name: "Invalid name given" };
  if (!validateEmail(email))
    errors = { ...errors, state: true, email: "Invalid email given" };
  if (!validatePhone(phone))
    errors = { ...errors, state: true, phone: "Invalid phone given" };

  return errors;
};
