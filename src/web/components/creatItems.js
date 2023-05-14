import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function creationAidCategoriesKits() {
  const [dataFetched, setDataFetched] = useState(false);
  const [categories, setCategories] = useState([]);
  const [donors, setDonors] = useState([]);

  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [donor, setDonorForIn] = useState("");
  const [itemDes, setItemDes] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const url1 = "/api/generalInfo/fetchCategoriesKits";
    const url2 = "/api/generalInfo/fetchDonor";
    axios.get(url1).then((res) => {
      setCategories(res.data);
      setDataFetched(true);
    });
    axios.get(url2).then((res) => {
      setDonors(res.data);
      setDataFetched(true);
    });
  }, []);

  const handleOptionChange = (e) => {
    setCategory(e.target.value);
    console.log(category);
  };

  const handleOptionChangeDonor = (e) => {
    setDonorForIn(e.target.value);
    console.log(category);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const doc = {
      itemName,
      category,
      donor,
      itemDes,
      typeOfForm: "createItems",
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
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Inventory Status</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((item) => (
              <tr key={item.name}>
                <td>{item.itemName}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            <h3>Item Name:</h3>
          </label>
          <br />
          <input
            type="text"
            id="name"
            name="Name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="category">Select an Category:</label>
          <select id="category" onChange={(e) => handleOptionChange(e)}>
            <option></option>
            {categories.map((option) => (
              <option key={option.itemName} value={option.itemName}>
                {option.itemName}
              </option>
            ))}
          </select>
          <br />
          <br />

          <label htmlFor="donorName">Select Donor:</label>
          <select id="category" onChange={(e) => handleOptionChangeDonor(e)}>
            <option></option>
            {donors.map((option) => (
              <option key={option.name} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
          <br />
          <br />
          <textarea
            id="itemDes"
            name="itemDes"
            rows="4"
            cols="50"
            placeholder="Enter Item Description here..."
            value={itemDes}
            onChange={(e) => setItemDes(e.target.value)}
          ></textarea>
          <br />
          <button type="submit" name="submit">
            Add New Item
          </button>
        </form>
      </div>
    )
  );
}

export default creationAidCategoriesKits;
