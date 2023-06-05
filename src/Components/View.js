import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Data from "./Datas.json";

const View = () => {
  const [edi, setEdit] = useState(Data);
  const [view, setView] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    let filterData = edi.filter((a) => a.id == id);
    setView(filterData);
    //  setTimeout(()=>{
    //   axios.get(`http://localhost:8900/user/${Userid}`)
    //   .then(res=> setView(res.data))
    //  },1000)
  }, [id]);

  return (
    <>
      {view.map((e) => {
        return (
          <form id="form1" className="justify-content-center">
            <h4>Your Details</h4>
            <fieldset className="flex-column">
              <label>Name :</label>
              <h6>{e.name}</h6>
              <label>Email :</label>
              <h6>{e.email}</h6>
              <label>Address :</label>
              <h6>{e.address}</h6>
              <label>Phone Number :</label>
              <h6>{e.phone}</h6>
              <label>id :</label>
              <h6>{e.id}</h6>
              <div className="d-flex justify-content-evenly">
                <Link to="/">
                  <button type="button" className="btn btn-primary">
                    Back
                  </button>
                </Link>
                <Link to="/add">
                  <button type="button" className="btn btn-primary">
                    <i className="bi bi-person-fill-add"></i> AddUser
                  </button>
                </Link>
              </div>
            </fieldset>
          </form>
        );
      })}
    </>
  );
};
export default View;
