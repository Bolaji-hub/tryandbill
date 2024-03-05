import ellipse from "../assets/Ellipse 1.png";
import ellipse2 from "../assets/Ellipse 2.png";

const Hero = () => {
  return (
    <div className="container bg-[#8872ba] flex flex-wrap lg:flex-nowrap sm:flex-col gap-8 items-center justify-center h-[80vh]">
      <div className="container flex p-2 justify-around">
        <div className="">
          <h1 className="text-4xl text-white py-8 font-bold mt-3">
            Making Financial <br /> Services And <br /> Subscription Easy For{" "}
            <br />
            You!
          </h1>
          <p className="text-white text-sm py-2 pr-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />{" "}
            do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <button className="text-white bg-[#382660] rounded-md px-4 py-2 mt-8">
            Get Started
          </button>
        </div>
        <div className="relative">
          <img src={ellipse} alt="" className="pr-12 " />
          <img
            src={ellipse2}
            alt=""
            className="hidden  md:block absolute right-[-120px] top-[250px] w-2/5 "
          />
        </div>
      </div>
      <div className="flex gap-10 justify-between text-white text-2xl font-bold mb-4">
        <div>
          <h2>234+</h2>
          <p className="text-sm font-light">Users</p>
        </div>
        <div>
          <h2>24K+</h2>
          <p className="text-sm font-light">Activities</p>
        </div>
        <div>
          <h2>24K+</h2>
          <p className="text-sm font-light">Downloads</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
