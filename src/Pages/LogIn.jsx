import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";

const LogIn = () => {
  const [email, setUseremail] = useState("");
  const [password, setPassword] = useState("");

  const handleUseremailChange = (event) => {
    setUseremail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div>
      <Header />
      <div className="ralative">
        <Hero />
        <div className="fixed bg-black bg-opacity-50 inset-0 flex items-center justify-center">
          <div className="bg-white absolute max-w-lg py-10 px-20 rounded-lg">
            <h1 className="text-2xl font-semibold ">Welcome Back!</h1>
            <form
              action=""
              className="flex flex-col items-center px-6 py-10 rounded-md"
            >
              <input
                type="text"
                name="email"
                value={email}
                onChange={handleUseremailChange}
                placeholder="Enter your email"
                className="border border-solid border-[#cfcfcf] w-full p-2 rounded-md mb-6 text-center text-black text-sm"
              />
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={handlePasswordChange}
                className="border-solid border border-[#cfcfcf] w-full p-2 rounded-md mb-6 text-center text-black text-sm"
              />
              <button
                type="submit"
                className="bg-[#CFCFCF] w-full rounded-md py-2"
              >
                Log In
              </button>
              <p className="text-sm text-[#382660] mt-4">Forgot Password?</p>
            </form>
            <p className="text-[#666666] text-sm">
              Don't have an account?{" "}
              <Link className="text-[#24124C]" to={"/SignUp"}>
                Create an Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
