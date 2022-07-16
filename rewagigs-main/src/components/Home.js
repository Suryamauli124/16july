import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Body from "./components/Body";
import { Fragment } from "react";
import ClientWindow from "./components/ClientWindow";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"  element={
              <Fragment>
                  < Navbar />
                  < Body />  
              </Fragment>
            } />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="clientwindow" element={<ClientWindow />} />
      </Routes>
    </div>
  );
}

export default App;
