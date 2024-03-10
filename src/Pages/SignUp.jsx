import Header from "../components/Header";
import Hero from "../components/Hero";

const SignUp = () => {
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
            <form className="flex flex-col items-center px-6 py-10 rounded-md">
              <input
                type="text"
                name="Full Name"
                placeholder="Enter your full name"
                className="border border-solid border-[#cfcfcf] w-full p-2 rounded-md mb-6 text-center text-black text-sm"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="border border-solid border-[#cfcfcf] w-full p-2 rounded-md mb-6 text-center text-black text-sm"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="border-solid border border-[#cfcfcf] w-full p-2 rounded-md mb-6 text-center text-black text-sm"
              />
              <p className="px-4 text-xs">
                By creating an account, you've agreed to the terms and
                Conditions.
              </p>
              <button className="w-full bg-[#cfcfcf] mt-4 rounded-md p-2 text-sm">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
