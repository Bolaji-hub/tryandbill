import akar from "../assets/akar-icons_send.png";
import vector from "../assets/Vector (1).png";
import vector1 from "../assets/Ellipse 2.png";
const Services = () => {
  return (
    <div className="container bg-[#f2f2f2] py-8">
      <div>
        <h5 className="text-[#7b7095] mt-4 py-1 text-sm">Services</h5>
        <h1 className="text-[#24124C] font-bold text-md">
          Get anything done in short time{" "}
        </h1>
        <p className="text-[#767676] text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-8">
        <div className="bg-white flex flex-col items-center rounded-xl mt-8 text-center px-2 ">
          <img
            src={akar}
            alt=""
            className="bg-[#F59E38] rounded-full my-4 h-[57px] w-[57px]"
          />
          <h1 className="text-[#382660] font-semibold mb-2">Airtime Top-Up</h1>
          <p className="text-[#454545] text-sm mb-5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
        <div className="bg-white flex flex-col items-center rounded-xl mt-8 text-center px-2">
          <img
            src={vector}
            alt=""
            className="bg-[#8497FF] rounded-full my-4 h-[57px] w-[57px]"
          />
          <h1 className="text-[#382660] font-semibold mb-2">
            Data Subscription
          </h1>
          <p className="text-[#454545] text-sm mb-5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
        <div className="bg-white flex flex-col items-center rounded-xl mt-8 text-center px-2">
          <img
            src={vector1}
            alt=""
            className="rounded-full my-4 h-[57px] w-[57px]"
          />
          <h1 className="text-[#382660] font-semibold mb-2">
            Data Subscription
          </h1>
          <p className="text-[#454545] text-sm mb-5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="bg-white flex flex-col items-center rounded-xl mt-8 text-center px-2 ">
          <img
            src={akar}
            alt=""
            className="bg-[#F59E38] rounded-full my-4 h-[57px] w-[57px]"
          />
          <h1 className="text-[#382660] font-semibold mb-2">Airtime Top-Up</h1>
          <p className="text-[#454545] text-sm mb-5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
