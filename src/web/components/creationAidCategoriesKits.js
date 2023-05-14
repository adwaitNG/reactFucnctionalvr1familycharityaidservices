import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function creationAidCategoriesKits() {
  const [dataFetched, setDataFetched] = useState(false);
  const [categories, setCategories] = useState([]);

  const [itemName, setItemName] = useState('');

  const navigate = useNavigate();


  useEffect(() => {
    const url = "/api/generalInfo/fetchCategoriesKits";
    axios.get(url).then((res) => {
      setCategories(res.data);
      setDataFetched(true);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const doc = {
      itemName,
      status:'Low',
      typeOfForm: 'creationAidCategoriesKits'
    };
    console.log(doc);
    const url = '/api/generalInfo/add';
    axios.post(url, doc).then((res) => {
        console.log(res);
        navigate("/volunteerPage");
       
    }).catch((err) => console.log(err));
   

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
      <br/>
      <br/>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"><h3>Category Name:</h3></label>
         <br />
         <input
          type="text"
           id="name"
           name="name"
           value={itemName}
           onChange={(e) => setItemName(e.target.value)}
         />
         <br />
         <input
           type="text"
           id="status"
           name="status"
           value="Low"
           style={{ visibility: 'hidden' }}
         />
         <input
           type="text"
           id="typeOfForm"
           name="typeOfForm"
           value="creationAidCategoriesKits"
           style={{ visibility: 'hidden' }}
         />
         <button type="submit" name="submit">
           Add New Category
         </button>
       </form>
      </div>
    )
  );
}

export default creationAidCategoriesKits;
