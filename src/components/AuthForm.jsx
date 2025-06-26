import { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const AuthForm = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const { type, setFormType } = props;

  const onHandleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className="w-[30%] p-12 rounded-sm mx-auto bg-black"
      onSubmit={onHandleFormSubmit}
    >
      <h1 className="text-white font-semibold text-3xl">
        {type === "login" ? "Sign In" : "Sign Up"}
      </h1>
      {type !== "login" && (
        <input
          type="text"
          className=" text-white px-2 py-2.5 my-6 rounded-xs block w-full text-sm bg-gray-800 outline-none"
          placeholder="Username"
        />
      )}
      <input
        type="email"
        className=" text-white px-2 py-2.5 my-6 rounded-xs block w-full text-sm bg-gray-800 outline-none"
        placeholder="Email"
      />
      <div className="flex items-center justify-between px-2 py-2.5 bg-gray-800 w-full my-6 rounded-xs">
        <input
          type={showPassword ? "text" : "password"}
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
      <button className="bg-red-600 text-white px-2 py-2 my-6 rounded-xs block w-full cursor-pointer">
        {type === "login" ? "Sign In" : "Sign Up"}
      </button>
      {type === "login" && (
        <p className="text-gray-400">
          New to Netflix ?{" "}
          <span
            className="text-white cursor-pointer font-semibold"
            onClick={() => setFormType("signup")}
          >
            Sign up now
          </span>
        </p>
      )}
      {type === "signup" && (
        <p className="text-gray-400">
          Already have an account ?{" "}
          <span
            className="text-white cursor-pointer font-semibold"
            onClick={() => setFormType("login")}
          >
            Sign in
          </span>
        </p>
      )}
    </form>
  );
};

export default AuthForm;
