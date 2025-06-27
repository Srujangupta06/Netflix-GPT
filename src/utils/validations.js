export const validateUserLogin = (email, password) => {
  if (typeof email.trim() !== "string" || !email.trim().endsWith("@gmail.com")) {
    return "Invalid Email";
  }

  const isValidPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
    password.trim()
  );
  if (!isValidPassword) {
    return "Invalid Password";
  }

  return null;
};

export const validateUserSignUp = (username, email, password) => {
  if (
    typeof username !== "string" ||
    username.length < 3 ||
    username.length > 20
  ) {
    return "Invalid Username";
  }

  if (typeof email !== "string" || !email.endsWith("@gmail.com")) {
    return "Invalid Email";
  }

  const isValidPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
    password
  );
  if (!isValidPassword) {
    return "Invalid Password";
  }

  return null; 
};
