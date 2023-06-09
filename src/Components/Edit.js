import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
//import Datas from "./Datas.json";

//let initialValue = { id: "", name: "", email: "", phone: "", address: "" };

const Edit = (props) => {
  const navigate = useNavigate();
  //const { id } = useParams();

  console.log(props.currentuser);

  //////////////////
  const [cuser, setCuser] = useState(props.currentuser);
  console.log(cuser);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setCuser({ ...cuser, [name]: value });
  };

  const addSubmitHandler = (e) => {
    e.preventDefault();
    props.UpdateUser(cuser.id, cuser);
    navigate("/");
    toast.success("User Updated Successfully");
  };

  return (
    <>
      <form
        id="form"
        className="justify-content-center"
        onSubmit={addSubmitHandler}
      >
        <h4>Edit Your Details</h4>
        <fieldset>
          <label>Id :</label>
          <input
            className="in"
            type="number"
            name="id"
            value={cuser.id}
            htmlFor="id"
            required
            onChange={handleInput}
          />
          <br />
          <label>Name :</label>
          <input
            className="in"
            type="text"
            name="name"
            value={cuser.name}
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
            value={cuser.email}
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
            value={cuser.address}
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
            value={cuser.phone}
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

            <input className="submit" type="submit" value={"Update"} />
          </div>
        </fieldset>
      </form>
    </>
  );
};
export default Edit;
