export const checkValidData = (email, password, name = null) => {
  const isNameValid =
    name == null ? true : /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

  // console.log(name);

  const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isNameValid) return "Name is not valid";
  if (!isEmailValid) return "Email Address is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
