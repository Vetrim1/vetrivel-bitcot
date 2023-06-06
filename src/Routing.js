import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Add from "./Components/Add";
import View from "./Components/View";
import Edit from "./Components/Edit";
import Search from "./Components/Search";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/edit/:id" element={<Edit />} />
             <Route path="/search" element={<Search />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
};
export default Routing;
