import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Datas from "./Datas.json";
import Tables from "./Tables";

import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Search = () => {
  const [Data, setData] = useState();
  const [Input, setInput] = useState("");

  useEffect(() => {
    setData(Datas);
  }, [Datas]);

  var submit1 = () => {
    let arr = Data.filter((item) =>
      item == ""
        ? item
        : (
            item.name.toLowerCase() ||
            item.id.toLowerCase() ||
            item.address.toLowerCase() ||
            item.phone.toLowerCase() ||
            item.email.toLowerCase()
          ).includes(Input.toLowerCase())
    );
    setData(arr);
  };

  //button Actions

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
            <Link to="/search">
              <input
                type="search"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
                onChange={(event) => {
                  setInput(event.target.value);
                  submit1(Input);
                }}
              />
            </Link>
          </div>

          {/* <Tables data={Data} /> */}
          {Data &&
            Data.map((a, i) => {
              return (
                <div className="table-responsive">
                  <table
                    className="table-responsive bg-white table table-hover overflow-hidden"
                    style={{ borderRadius: "15px" }}
                  >
                    <tr key={a.i}>
                      <th className="p-3" scope="row">
                        {++i}
                      </th>
                      <th>
                        <div
                          className="text-center"
                          style={{ fontSize: "50px" }}
                        >
                          <i class="bi bi-person-circle"></i>
                        </div>
                      </th>
                      <th>
                        <ul
                          className="text-start"
                          style={{ listStyleType: "none" }}
                        >
                          <li>{a.name}</li>
                          <li>{a.email}</li>
                          <li>{a.address}</li>
                          <li>{a.phone}</li>
                        </ul>
                      </th>
                      <th>
                        <div className="d-flex justify-content-around ">
                          <div class="btn-group" role="group">
                            <Link to={`/edit/${a.id}`}>
                              <button
                                data-tooltip-id="edit"
                                data-tooltip-content="Edit"
                                type="button"
                                className="btn btn-light "
                                style={{ fontSize: "20px" }}
                                onClick={() => handleEdit(a.id)}
                              >
                                <i className="bi bi-pen-fill"></i>
                              </button>
                            </Link>
                            <Link to={`/view/${a.id}`}>
                              <button
                                data-tooltip-id="view"
                                data-tooltip-content="View"
                                type="button"
                                className="btn btn-light"
                                style={{ fontSize: "20px" }}
                                onClick={() => handleView(a.id)}
                              >
                                <i className="fa-solid fa-eye"></i>
                              </button>
                            </Link>
                            <button
                              type="button"
                              data-tooltip-id="delete"
                              data-tooltip-content="Delete"
                              className="btn btn-light"
                              style={{ fontSize: "20px" }}
                              onClick={() => handleDelete(a.id)}
                            >
                              <i className="bi bi-trash"></i>
                            </button>
                          </div>
                        </div>
                      </th>
                    </tr>
                  </table>
                </div>
              );
            })}
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
export default Search;
