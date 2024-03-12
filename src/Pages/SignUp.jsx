import Header from "../components/Header";
import Hero from "../components/Hero";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <Header />
      <div className="relative">
        <Hero />
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white absolute max-w-lg py-10 px-20 rounded-lg">
            <h1 className="flex items-center justify-center text-3xl mb-3 text-[#454545] font-semibold">
              Get Started
            </h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center px-6 py-10 rounded-md"
            >
              <input
                type="text"
                name="Full Name"
                value={fullName}
                placeholder="Enter your full name"
                onChange={(e) => setFullName(e.target.value)}
                className="border border-solid border-[#cfcfcf] w-full p-2 rounded-md mb-6 text-center text-black text-sm"
              />
              <input
                type="text"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                className="border border-solid border-[#cfcfcf] w-full p-2 rounded-md mb-6 text-center text-black text-sm"
              />
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="border-solid border border-[#cfcfcf] w-full p-2 rounded-md mb-6 text-center text-black text-sm"
              />
              <p className="px-4 text-xs">
                By creating an account, you've agreed to the terms and
                Conditions.
              </p>
              <button
                onSubmit={handleSubmit}
                className="w-full bg-[#cfcfcf] mt-4 rounded-md p-2 text-sm"
              >
                Sign Up
              </button>
            </form>
            <p className="font-light mb-4 mt-2">
              Don't have an account? Create an account.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
