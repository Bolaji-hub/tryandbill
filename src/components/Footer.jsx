import union from "../assets/Union.svg";
import linkedin from "../assets/akar-icons_linkedin-v1-fill.svg";
import twitter from "../assets/akar-icons_send.png";
import instagram from "../assets/Vector (5).png";

const Footer = () => {
  return (
    <div className="container bg-[#382660] text-white py-8">
      <div className="grid md:grid-cols-3">
        <div>
          <h1 className="flex gap-1 text-xl ">
            TRYAN
            <img src={union} alt="" />
          </h1>
        </div>
        <div>
          <ul className="font-light text-sm text-[#CFCFCF]">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold">Contact Us</h1>
          <h3 className="text-[#CFCFCF] font-light">(406)555-0120</h3>
          <p className="text-[#CFCFCF] font-light">ephphata@gmail.org</p>
          <div className="flex gap-2 mt-3">
            <img src={linkedin} alt="" className="bg-[#604E88] rounded-lg " />
            <img src={twitter} alt="" className="bg-[#604E88]" />
            <img src={instagram} alt="" className="bg-[#604E88]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
