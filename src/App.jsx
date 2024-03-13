import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import Airtime from "./Pages/Airtime";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/airtime" element={<Airtime />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
