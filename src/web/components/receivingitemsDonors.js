import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function receivingitemsDonors() {
  const navigate = useNavigate();
  const [dataFetched, setDataFetched] = useState(false);

  const [donors, setDonors] = useState([]);
  const [items, setItems] = useState([]);
  const [kits, setKits] = useState([]);

  useEffect(() => {
    const url1 = "/api/generalInfo/fetchItems";
    const url2 = "/api/generalInfo/fetchDonor";
    const url3 = "/api/generalInfo/fetchKits";

    axios.get(url1).then((res) => {
      setItems(res.data);
      setDataFetched(true);
    });
    axios.get(url2).then((res) => {
      setDonors(res.data);
      setDataFetched(true);
    });
    axios.get(url3).then((res) => {
      setKits(res.data);
      setDataFetched(true);
    });
  }, []);

  return (
    <div>
      {donors.map((donor) => (
        <div>
          <span>
            Donor Name: <br />
          </span>
          <span>{donor.name}</span>
          <br />
          <span>
            Items: <br />
          </span>
          {items
            .filter((item) => item.donor === donor.name)
            .map((item) => (
              <span key={item.id}>
                {item.itemName} <br />
              </span>
            ))}
          <br />
          <span>
            Kits: <br />
          </span>
          {kits
            .filter((kit) => kit.donor === donor.name)
            .map((kit) => (
              <span key={kit.id}>
                {kit.kitName} <br />
              </span>
            ))}
          <span>
            {" "}
            <br />
          </span>
        </div>
      ))}
    </div>
  );
}

export default receivingitemsDonors;
