import { useState } from "react";

const Airtime = () => {
  const [myNetwork, setMyNetwork] = useState("option1");
  const [inputNumber, setInputNumber] = useState("");
  const [amount, setAmount] = useState("");

  const handleChange = (event) => {
    setMyNetwork(event.target.value);
  };

  return (
    <div className="container py-8 items-center justify-center">
      <h1 className="font-bold text-xl text-[#382660]">Buy Airtime</h1>
      <form className="flex flex-col py-10" action="">
        <label htmlFor="Network">
          <select
            className="border border-solid border-[#cfcfcf] w-[50%] p-2 rounded-md mb-6 text-center text-black text-sm"
            value={myNetwork}
            onChange={handleChange}
          >
            <option value="option1">MTN</option>
            <option value="option2">AIRTEL</option>
            <option value="option3">GLO</option>
          </select>
        </label>
        <label htmlFor="Phone Number">
          <input
            type="tel"
            value={inputNumber}
            maxLength={11}
            placeholder="Destination Number"
            onChange={(e) => setInputNumber(e.target.value)}
            className="border border-solid border-[#cfcfcf] w-[50%] p-2 rounded-md mb-6 text-center text-black text-sm"
          />
        </label>
        <label htmlFor="Amount">
          <input
            type="text"
            value={amount}
            placeholder="Enter Amount"
            onChange={(e) => setAmount(e.target.value)}
            className="border border-solid border-[#cfcfcf] w-[50%] p-2 rounded-md mb-6 text-center text-black text-sm"
          />
        </label>
        <button
          type="submit"
          className="bg-[#382660] w-[50%] rounded-md py-2 text-white font-thin"
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Airtime;
