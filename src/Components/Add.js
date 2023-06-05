import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Data from "./Datas.json";

let initialValue = { id: "", name: "", email: "", phone: "", address: "" };
const Add = () => {
  let [users, setUsers] = useState(Data);
  const [adata, addData] = useState(initialValue);

  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    addData({ ...adata, [name]: value });
    console.log(adata);
  };
  //console.log(adata);
  const addSubmitHandler = (e) => {
    let addUsers = users.push(adata);
    setUsers(addUsers);
    //setUsers([...users, adata]);
    toast.success("User Added Successfully");
    navigate("/");
  };

  return (
    <>
      <form
        id="form"
        className="justify-content-center"
        onSubmit={addSubmitHandler}
      >
        <h4>Add Your Details</h4>
        <fieldset>
          <label>id :</label>
          <input
            className="in"
            type="number"
            name="id"
            htmlFor="is"
            spellCheck="true"
            required
            onChange={handleInput}
          />
          <br />
          <label>Name :</label>
          <input
            className="in"
            type="text"
            name="name"
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
            name="email"
            htmlFor="email"
            spellCheck="true"
            required
            onChange={handleInput}
          />
          <br />
          <label>Address : </label>
          <input
            className="in"
            type="text"
            name="address"
            htmlFor="address"
            required
            onChange={handleInput}
          />
          <br />
          <label>Phone Number : </label>
          <input
            className="in"
            type="tel"
            name="phone"
            htmlFor="phone"
            maxLength="10"
            required
            onChange={handleInput}
          />
          <br />

          <input
            className="submit"
            type="submit"
            value="Submit"
            htmlFor="submit"
          />

          <Link to="/">
            <button
              style={{ marginLeft: "80px", padding: "8px" }}
              type="button"
              className="btn btn-secondary"
            >
              Back
            </button>
          </Link>
        </fieldset>
      </form>
    </>
  );
};
export default Add;
