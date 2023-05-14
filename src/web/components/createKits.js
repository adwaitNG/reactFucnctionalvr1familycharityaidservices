import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function creationKits() {
  const [dataFetched, setDataFetched] = useState(false);
  const [donors, setDonors] = useState([]);

  const [kitName, setKitName] = useState("");
  const [donor, setDonorForIn] = useState("");
  const [kitDes, setKitDes] = useState("");

  const navigate = useNavigate();
  
  useEffect(() => {
    const url2 = "/api/generalInfo/fetchDonor";
    axios.get(url2).then((res) => {
      setDonors(res.data);
      setDataFetched(true);
    });
  }, []);

  const handleOptionChangeDonor = (e) => {
    setDonorForIn(e.target.value);
    console.log(category);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const doc = {
        kitName,
        donor,
        kitDes,
        typeOfForm: "createkit",
    };
    console.log(doc);
    const url = "/api/generalInfo/add";
    axios
      .post(url, doc)
      .then((res) => {
        console.log(res);
        navigate("/volunteerPage");
      })
      .catch((err) => console.log(err));
  };

  return (
    dataFetched && (
      <div>
          <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            <h3>Kit Name:</h3>
          </label>
          <br />
          <input
            type="text"
            id="name"
            name="Name"
            value={kitName}
            onChange={(e) => setKitName(e.target.value)}
          />
          <br />
          <br />
          
          <label htmlFor="donorName">Select Donor:</label>
          <select id="category" onChange={(e) => handleOptionChangeDonor(e)}>
            <option></option>
            {donors.map((option) => (
              <option
                key={option.name}
                value={option.name}
              >
                {option.name}
              </option>
            ))}
          </select>
          <br/>
          <br/>

          <textarea
          id="kitDes"
          name="kitDes"
          rows="4"
          cols="50"
          placeholder="Enter Kit Description here..."
          value={kitDes}
          onChange={(e) => setKitDes(e.target.value)}
        ></textarea>
        <br />
          <button type="submit" name="submit">
            Add New Kit
          </button>
        </form>
      </div>
    )
  );
}

export default creationKits;
