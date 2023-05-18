import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function requisitionitemsRecipients() {
  const navigate = useNavigate();
  const [dataFetched, setDataFetched] = useState(false);

  //Data reacived from database
  const [kits, setKits] = useState([]);
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  //Data to send to database
  const [kitsData, setKitsData] = useState({ numsKits: 0, kits: [] });
  const [categoryData, setCategoryData] = useState({
    numsCategory: 0,
    categories: [],
  });
  const [itemData, setIemData] = useState({ numsItem: 0, items: [] });

  const [numsKits, setNumKits] = useState(0);
  const [numItems, setNumItems] = useState(0);
  //To show data on webpage.
  const [currentCategory, setcurrentCategory] = useState("");
  const [currentKitDes, setCurrentKitDes] = useState("");
  const [currentItemDes, setCurrentItemDes] = useState("");

  //Handles change in kit number
  const handleNumKitsChange = (e) => {
    let newKitsData = kitsData;
    newKitsData.numsKits = parseInt(e.target.value);
    setKitsData(newKitsData);
    setNumKits(parseInt(e.target.value));
  };

  //Hnadels change in item number
  const handleNumItemsChange = (e) => {
    //Number of categories
    let newcategoryData = categoryData;
    newcategoryData.numsCategory = parseInt(e.target.value);
    setCategoryData(newcategoryData);

    //Number of items
    let newitemData = itemData;
    newitemData.numsItem = parseInt(e.target.value);
    setIemData(newitemData);

    setNumItems(parseInt(e.target.value));
  };

  //handels kits selected in dropdownlist
  const handleOptionChangeKit = (e) => {
    let newKitsData = kitsData;
    newKitsData.kits.push([
      kits[e.target.value].kitName,
      kits[e.target.value].kitDes,
    ]);
    setKitsData(newKitsData);
    setCurrentKitDes(kits[e.target.value].kitDes);
    console.log(kitsData);
  };

  //Handles category selection in dropdown list
  const handleOptionChangeCategory = (e) => {
    let newcategoryData = categoryData;
    newcategoryData.categories.push(e.target.value);
    setcurrentCategory(e.target.value);
    setCategoryData(newcategoryData);
    console.log(categoryData);
  };

  //Handles changes in Item selection in dropdown list
  const handleOptionChangeItem = (e) => {
    let newItemData = itemData;
    newItemData.items.push([
      items[e.target.value].itemName,
      items[e.target.value].itemDes,
      items[e.target.value].category,
    ]);
    setCurrentItemDes(items[e.target.value].itemDes);
    setIemData(newItemData);
  };

  const renderDropdownKits = () => {
    const dropdowns = [];
    for (let i = 1; i <= numsKits; i++) {
      dropdowns.push(
        <div key={i}>
          <br />
          <label>Kits {i}:</label>
          <select id="Kits" onChange={(e) => handleOptionChangeKit(e)}>
            <option>Select Option --</option>
            {kits.map((option, index) => (
              <option key={option.kitName} value={index}>
                {option.kitName}
              </option>
            ))}
          </select>
        </div>
      );
    }
    return dropdowns;
  };

  const renderDropdownCategory = () => {
    const dropdowns = [];
    for (let i = 1; i <= numItems; i++) {
      dropdowns.push(
        <div key={i}>
          <br />
          <label>Category {i}:</label>
          <select id="Category" onChange={(e) => handleOptionChangeCategory(e)}>
            <option>Select Option --</option>
            {categories.map((option) => (
              <option key={option.itemName} value={option.itemName}>
                {option.itemName}
              </option>
            ))}
          </select>

          <br />

          <label>Items {i}:</label>
          <select id="Items" onChange={(e) => handleOptionChangeItem(e)}>
            <option>Select Option --</option>
            {items.map((option, index) => {
              if (option.category === currentCategory) {
                return (
                  <option key={option.itemName} value={index}>
                    {option.itemName}
                  </option>
                );
              } else {
                return null;
              }
            })}
          </select>
        </div>
      );
    }
    return dropdowns;
  };

  useEffect(() => {
    const fetchData = async () => {
      const url1 = "/api/generalInfo/fetchKits";
      const url2 = "/api/generalInfo/fetchItems";
      const url3 = "/api/generalInfo/fetchCategoriesKits";
      axios.get(url1).then((res) => {
        setKits(res.data);
        setDataFetched(true);
      });
      axios.get(url2).then((res) => {
        setItems(res.data);
        setDataFetched(true);
      });
      axios.get(url3).then((res) => {
        setCategories(res.data);
        setDataFetched(true);
      });
    };
    fetchData();
  }, []);

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const doc = {
      kitsData,
      itemData,
      typeOfForm: "requisitionitemsAidRecipients",
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
    <div class="row text-center">
      <h1> Requisition of items from Aid Recipients</h1>
      <form onSubmit={handleSubmit}>
        <label>Number of Kits:</label>
        <input
          type="number"
          min="0"
          value={numsKits}
          onChange={handleNumKitsChange}
        />
        {renderDropdownKits()}
        <br />
        <br />
        Currently Selected Kit Description: {currentKitDes}
        <br />
        <label>Number of Items:</label>
        <input
          type="number"
          min="0"
          value={numItems}
          onChange={handleNumItemsChange}
        />
        {renderDropdownCategory()}
        <br />
        Currently Selected Item Description: {currentItemDes}
        <br />
        <button type="submit" name="submit" className="btn btn-info">
          Submit
        </button>
      </form>
    </div>
  );
}

export default requisitionitemsRecipients;
