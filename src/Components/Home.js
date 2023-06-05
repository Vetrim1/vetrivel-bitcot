import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Data from "./Datas.json";
import Tables from "./Tables";

import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Home = () => {
  const [Datas, setData] = useState(Data);
  const [Input, setInput] = useState("");

  var onSearchHandler = (event) => {
    setInput(event.target.value);
    setData((prev) => {
      return prev.filter((item) =>
        item.name.toLowerCase().includes(Input.toLowerCase())
      );
    });
  };
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-sm-12 col-12">
            <div className=" text-center">
              <h5
                className="col-sm-3 p-3 "
                style={{
                  backgroundColor: "skyblue",
                  color: "white",
                  borderRadius: "15px",
                  fontSize: "25px",
                  height: "50px",
                  width: "100%"
                }}
              >
                All Contacts{" "}
                <Link to="/add">
                  <i
                    data-tooltip-id="create"
                    data-tooltip-content="Create"
                    className="bi bi-plus-circle-fill"
                  ></i>
                </Link>
              </h5>
            </div>
          </div>
          <div
            className=" m-auto col-sm-4 col-12 text-center input-group mb-3"
            style={{ width: "40%" }}
          >
            <input
              type="search"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
              onChange={(e) => onSearchHandler(e)}
            />
          </div>

          <Tables data={Datas} />
        </div>
      </div>
      <Tooltip
        id="create"
        style={{
          backgroundColor: "lightgreen",
          color: "black",
          fontWeight: "bolder",
          padding: "3px",
          borderRadius: "20px"
        }}
      />
    </>
  );
};
export default Home;
