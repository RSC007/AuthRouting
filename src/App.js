import { Route, Routes } from "react-router-dom";

import Layout from "./Components/Common/Layout";
import PrivateRoute from "./Components/Common/PrivateRoute";
import CountryTable from "./Components/Common/CountryTable";
import Home from "./Components/Pages/Home";
import SignIn from "./Components/Pages/SignIn";
import SignUp from "./Components/Pages/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          
          <Route path="/" element={<PrivateRoute Compenent={Home} />} />
          <Route path="/country" element={<PrivateRoute Compenent={CountryTable} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
