import React, { useState, useEffect, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { Chart } from "chart.js/auto";

function BarChart({ data }) {
    const chartRef = useRef(null);
  
    useEffect(() => {
      const chart = chartRef.current.getContext("2d");
      new Chart(chart, {
        type: "bar",
        data: {
          labels: Object.keys(data),
          datasets: [
            {
              label: "Count",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 1,
              data: Object.values(data),
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: "Bar Chart of Items",
            fontSize: 25,
          },
          legend: {
            display: true,
            position: "top",
          },
        },
      });
    }, [data]);
  
    return <canvas id="myChart" ref={chartRef} style={{ height: "700px", width: "700px" }}/>;
  }
  
  function admin() {
    // const navigate = useNavigate();
    const [dataFetched, setDataFetched] = useState(false);
  
    //Data received from database
    const [items, setItems] = useState([]);
  
    const itemList = items.flatMap((allItems) =>
      allItems.itemData.items.map((item) => item[0])
    );
    const kitsList = items.flatMap((allItems) =>
      allItems.kitsData.kits.map((item) => item[0])
    );
  
    // Count occurrences of each string
    const kitCounts = {};
    for (let key in kitsList) {
      const value = kitsList[key];
      if (kitCounts[value]) {
        kitCounts[value]++;
      } else {
        kitCounts[value] = 1;
      }
    }
  
    const itemCounts = {};
    for (let key in itemList) {
      const value = itemList[key];
      if (itemCounts[value]) {
        itemCounts[value]++;
      } else {
        itemCounts[value] = 1;
      }
    }
  
    // Sort the objects in descending order by their values, and get the top 5 results
    const topKitCounts = Object.fromEntries(
      Object.entries(kitCounts)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5)
    );
    const topItemCounts = Object.fromEntries(
      Object.entries(itemCounts)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5)
    );
  
    useEffect(() => {
      const fetchData = async () => {
        const url1 = "/api/generalInfo/fetchrequisitionitemsAidRecipients";
        axios.get(url1).then((res) => {
          setItems(res.data);
          setDataFetched(true);
        });
      };
      fetchData();
    }, []);
  
    return (    
    <div style={{ display: "flex" }}>
      <div>
        <h5>Kits</h5>
        {dataFetched && <BarChart data={topKitCounts} />}
      </div>
      <div>
        <h5>Items</h5>
        {dataFetched && <BarChart data={topItemCounts} />}
      </div>
    </div>
    );
  }
  
  export default admin;
  