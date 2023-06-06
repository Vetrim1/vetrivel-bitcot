import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Datas from "./Datas.json";

let initialValue = { id: "", name: "", email: "", phone: "", address: "" };

const Edit = () => {
  const [edi, setEdit] = useState([]);
  const [adata2, addData2] = useState([initialValue]);
  const [upd, setUp] = useState();

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setEdit(Datas);
    console.log(edi);
    let filterData = Object.values(edi).filter((a) => a.id == id);
    filterData.map((a) => setEdit(a));
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    addData2({ ...adata2, [name]: value });
  };

  const addSubmitHandler = (e) => {
    e.preventDefault();

    navigate("/");
  };

  const updateTask = (id, adata2) => {
    let { name, email, address, phone } = adata2;
    const updatedTasks = edi.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          name: name,
          email: email,
          address: address,
          phone: phone
        };
      }
      return task;
    });

    setEdit(updatedTasks);
  };

  // console.log(edi);
  return (
    <>
      {/* {edi.map((item) => { */}
      {/* return ( */}
      <form
        id="form"
        className="justify-content-center"
        onSubmit={addSubmitHandler}

        // edit={edi}
        // setEdit={setEdit}
      >
        <h4>Edit Your Details</h4>
        <fieldset>
          <label>Name :</label>
          <input
            className="in"
            type="text"
            name="name"
            value={edi.name}
            htmlFor="name"
            spellCheck="true"
            required
            onChange={handleInput}
          />
          <br />
          <label>Email : </label>
          <input
            className="in"
            type="text"
            name="address"
            value={edi.email}
            htmlFor="address"
            spellCheck="true"
            required
            onChange={handleInput}
          />
          <br />
          <label>Address : </label>
          <input
            className="in"
            type="address"
            name="city"
            value={edi.address}
            htmlFor="city"
            required
            onChange={handleInput}
          />
          <br />
          <label>Phone Number : </label>
          <input
            className="in"
            type="tel"
            name="phone"
            value={edi.phone}
            htmlFor="pincode"
            maxLength="10"
            required
            onChange={handleInput}
          />
          <br />

          <div className="d-flex justify-content-evenly">
            <Link to="/">
              <input className="submit" type="button" value="Back" />
            </Link>

            <input
              className="submit"
              type="submit"
              onClick={() => updateTask(edi.id, adata2)}
              value={"Update"}
            />
          </div>
        </fieldset>
      </form>
      {/* ); */}
      {/* })} */}
    </>
  );
};
export default Edit;
