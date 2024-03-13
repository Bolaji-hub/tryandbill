import arrow from "../assets/arrow-left.png";
import bell from "../assets/Vector (6).png";
import profile from "../assets/Ellipse 4.png";
const Heads = () => {
  return (
    <div className="flex  mb-8 mt-2">
      <div className="flex justify-between mb-1">
        <ul className="flex ">
          <li>Purchase</li>
          <img src={arrow} alt="" className="h-[20px] mt-1" />
          <li>Buy Airtime</li>
        </ul>
      </div>
      <div className="flex ml-auto gap-4 mb-1">
        <img src={bell} alt="" className="h-[25px] mt-2" />
        <img src={profile} alt="" />
      </div>
      <hr className="border-1 border-slate-400" />
    </div>
  );
};

export default Heads;
