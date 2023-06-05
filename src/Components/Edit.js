import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Data from "./Datas.json";

let initialValue = { id: "", name: "", email: "", phone: "", address: "" };

const Edit = () => {
  const [edi, setEdit] = useState(Data);
  const [adata2, addData2] = useState(initialValue);

  const navigate = useNavigate();
  const { id } = useParams();

  let name = useRef("");
  let email = useRef("");
  let address = useRef("");
  let phone = useRef("");
  useEffect(() => {
    console.log(id);
    //var IndexFind1 = edi.map((e) => e.id).indexOf(id);
    let filterData = edi.filter((a) => a.id == id);
    name.current.value = filterData.map((a) => a.name);
    email.current.value = filterData.map((a) => a.email);
    address.current.value = filterData.map((a) => a.address);
    phone.current.value = filterData.map((a) => a.phone);
  }, [id]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    addData2({ ...adata2, [name]: value });
  };

  const addSubmitHandler = (e) => {
    e.preventDefault();
    name = name.current.value;
    email = email.current.value;
    address = address.current.value;
    phone = phone.current.value;
    navigate("/");
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
          <label>Name :</label>
          <input
            className="in"
            type="text"
            name="name"
            value={edi.name}
            ref={name}
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
            ref={email}
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
            value={adata2.address}
            ref={address}
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
            value={adata2.phone}
            ref={phone}
            htmlFor="pincode"
            maxLength="6"
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
