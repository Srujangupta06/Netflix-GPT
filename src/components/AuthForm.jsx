import { useRef, useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { MdOutlineErrorOutline } from "react-icons/md";
import { validateUserLogin, validateUserSignUp } from "../utils/validations";

const AuthForm = (props) => {
  // States
  const [showPassword, setShowPassword] = useState(false);
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Props
  const { type, setFormType } = props;

  const onHandleFormSubmit = (e) => {
    e.preventDefault();

    // Validate the Form Data
    if (type === "login") {
      setErrorMessage(validateUserLogin(email.current.value, password.current.value));
      console.log({
        email: email.current.value,
        password: password.current.value,
      });
    } else {
      setErrorMessage(validateUserSignUp(username.current.value,email.current.value, password.current.value));
      console.log({
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      });
    }
  };

  return (
    <form
      autoComplete="off"
      className="w-[30%] py-8 px-10 rounded-sm mx-auto bg-black/50"
      onSubmit={onHandleFormSubmit}
    >
      <h1 className="text-white font-semibold text-3xl">
        {type === "login" ? "Sign In" : "Sign Up"}
      </h1>
      {type !== "login" && (
        <input
          type="text"
          ref={username}
          required
          className="text-white px-2 py-2.5 my-6 rounded-xs block w-full text-sm bg-gray-800 outline-none"
          placeholder="Username"
        />
      )}
      <input
        type="email"
        ref={email}
        required
        className="text-white px-2 py-2.5 my-6 rounded-xs block w-full text-sm bg-gray-800 outline-none"
        placeholder="Email"
      />
      <div className="flex items-center justify-between px-2 py-2.5 bg-gray-800 w-full my-6 rounded-xs">
        <input
          type={showPassword ? "text" : "password"}
          ref={password}
          required
          className="text-white rounded-xs block text-sm outline-none"
          placeholder="Password"
        />

        {showPassword ? (
          <BsFillEyeFill
            className=" text-white mr-2 cursor-pointer"
            onClick={() => setShowPassword(false)}
          />
        ) : (
          <BsFillEyeSlashFill
            className=" text-white mr-2 cursor-pointer"
            onClick={() => setShowPassword(true)}
          />
        )}
      </div>
      {errorMessage && (
        <div className="flex items-center gap-1">
          <MdOutlineErrorOutline className="text-red-700 text-xl" />
          <p className="text-red-700 font-semibold">{errorMessage}</p>
        </div>
      )}
      <button className="hover:bg-red-800 transition-all duration-150 transform bg-red-600 text-white px-2 py-2 my-4 rounded-xs block w-full cursor-pointer">
        {type === "login" ? "Sign In" : "Sign Up"}
      </button>

      {type === "login" && (
        <p className="text-gray-400">
          New to Netflix ?{" "}
          <span
            className="text-white cursor-pointer font-semibold hover:underline"
            onClick={() => {
              setFormType("signup"), setErrorMessage("");
            }}
          >
            Sign up now
          </span>
        </p>
      )}
      {type === "signup" && (
        <p className="text-gray-400">
          Already have an account ?{" "}
          <span
            className="text-white cursor-pointer font-semibold hover:underline"
            onClick={() => {
              setFormType("login"), setErrorMessage("");
            }}
          >
            Sign in
          </span>
        </p>
      )}
    </form>
  );
};

export default AuthForm;
