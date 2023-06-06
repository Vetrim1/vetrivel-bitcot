import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Tables = (props) => {
  console.log(props.data);

  //let [users, setUsers] = useState(props.data);
  let [a, setUsers] = useState(props.data);
  // setUsers(props.data);
  // console.log(users);

  let navigate = useNavigate();

  let handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  let handleView = (id) => {
    navigate(`/view/${id}`);
  };

  //To find the index with the help of id & use splice method to remove it & set it useStates
  let handleDelete = (id) => {
    if (window.confirm("Are you sure")) {
      var IndexFind = a.map((e) => e.id).indexOf(id);
      let remainFind = [...a];
      remainFind.splice(IndexFind, 1);
      setUsers(remainFind);
      toast.success("Deleted Successfully");
    }
  };

  return (
    <>
      <div className="container table-responsive">
        <marquee
          width="80%"
          style={{ marginLeft: "100px", color: "skyblue", fontSize: "14px" }}
          Scrollamount="10"
        >
          I done CRUD operations (View,Delete,Create,Update).Thank you bitcot &
          Nishita mam giving me this Opportunity to prove myself....
        </marquee>

        {a.map((a, i) => {
          console.log(a);

          return (
            <div className="table-responsive">
              <table
                className="table-responsive bg-white table table-hover overflow-hidden"
                style={{ borderRadius: "15px" }}
              >
                <tr>
                  <th className="p-3" scope="row">
                    {++i}
                  </th>
                  <th>
                    <div className="text-center" style={{ fontSize: "50px" }}>
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

        <Tooltip id="edit" style={{ padding: "2px", borderRadius: "20px" }} />
        <Tooltip
          id="view"
          style={{
            backgroundColor: "yellow",
            color: "black",
            padding: "2px",
            borderRadius: "20px"
          }}
        />
        <Tooltip
          id="delete"
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "2px",
            borderRadius: "20px"
          }}
        />
      </div>
    </>
  );
};
export default Tables;
