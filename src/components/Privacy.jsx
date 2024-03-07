import frame from "../assets/Frame 15.png";
import frame2 from "../assets/Frame 17.png";
import frame3 from "../assets/Frame 16.png";
const Privacy = () => {
  return (
    <div className="container bg-white py-8">
      <div className="flex flex-col">
        <h1 className="text-2xl text-[#24124C] mb-5">
          We Take Your Account Privacy Seriously
        </h1>
        <p className="text-[#454545]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </p>
        <p className="text-[#454545] mt-3">
          Taliquaconsectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="ml-auto grid md:grid-cols-2">
        <img src={frame} alt="" className="md:block hidden" />
        <div className="">
          <img src={frame3} alt="" className="md:block hidden mb-4" />
          <img src={frame2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Privacy;
