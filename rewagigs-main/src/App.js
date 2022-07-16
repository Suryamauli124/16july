import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Body from "./components/Body";
import { Fragment } from "react";
import Header from "./components/Header";
import SellerCard from "./components/SellerCard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"  element={
              <Fragment>
                  < Header />
                  < Body />  
              </Fragment>
            } />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="sellercard" element={<SellerCard />} />
      </Routes>
    </div>
  );
}

export default App;
