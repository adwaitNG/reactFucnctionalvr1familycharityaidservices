import React, { useState, useEffect, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { Chart } from "chart.js/auto";

// function BarChart({ data }) {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const chart = chartRef.current.getContext("2d");
//     new Chart(chart, {
//       type: "bar",
//       data: {
//         labels: Object.keys(data),
//         datasets: [
//           {
//             label: "Count",
//             backgroundColor: "rgba(75,192,192,1)",
//             borderColor: "rgba(0,0,0,1)",
//             borderWidth: 1,
//             data: Object.values(data),
//           },
//         ],
//       },
//       options: {
//         title: {
//           display: true,
//           text: "Bar Chart of Items",
//           fontSize: 25,
//         },
//         legend: {
//           display: true,
//           position: "top",
//         },
//       },
//     });
//   }, [data]);

//   return (
//     <canvas
//       id="myChart"
//       ref={chartRef}
//       style={{ height: "700px", width: "700px" }}
//     />
//   );
// }
function BarChart({ data }) {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current.getContext("2d");
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }
    chartInstanceRef.current = new Chart(chart, {
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

  return (
    <canvas
      id="myChart"
      ref={chartRef}
      style={{ height: "200px", width: "700px" }}
    />
  );
}

function admin() {
  // const navigate = useNavigate();
  const [dataFetched, setDataFetched] = useState(false);

  //Data received from database
  const [items, setItems] = useState([]);
  const [itemsInventory, setItemsInventory] = useState([]);

  const itemList = items.flatMap((allItems) =>
    allItems.itemData.items.map((item) => item[0])
  );

  const categoryList = items.flatMap((allItems) =>
    allItems.itemData.items.map((item) => item[2])
  );

  const inventoryItemsList = itemsInventory.flatMap(
    (allItems) => allItems.itemName
  );
  console.log(inventoryItemsList);

  // Count occurrences of each string

  const itemCounts = {};
  for (let key in itemList) {
    const value = itemList[key];
    if (itemCounts[value]) {
      itemCounts[value]++;
    } else {
      itemCounts[value] = 1;
    }
  }

  const categoryCounts = {};
  for (let key in categoryList) {
    const value = categoryList[key];
    if (categoryCounts[value]) {
      categoryCounts[value]++;
    } else {
      categoryCounts[value] = 1;
    }
  }

  const inventoryItemCounts = {};
  for (let key in inventoryItemsList) {
    const value = inventoryItemsList[key];
    if (inventoryItemCounts[value]) {
      inventoryItemCounts[value]++;
    } else {
      inventoryItemCounts[value] = 1;
    }
  }

  // Sort the objects in descending order by their values, and get the top 5 results
  const topItemCounts = Object.fromEntries(
    Object.entries(itemCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
  );
  const topCategoryCounts = Object.fromEntries(
    Object.entries(categoryCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
  );
  const lowInventoryCounts = Object.fromEntries(
    Object.entries(inventoryItemCounts)
      .sort(([, a], [, b]) => a - b)
      .slice(0, 5)
  );

  const mostDonatedItemCount = Object.fromEntries(
    Object.entries(inventoryItemCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
  );

  useEffect(() => {
    const fetchData = async () => {
      const url1 = "/api/generalInfo/fetchrequisitionitemsAidRecipients";
      const url2 = "/api/generalInfo/fetchItems";
      axios.get(url1).then((res) => {
        setItems(res.data);
        setDataFetched(true);
      });
      axios.get(url2).then((res) => {
        setItemsInventory(res.data);
        setDataFetched(true);
      });
    };
    fetchData();
  }, []);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <h5>Items that have been distributed as aid</h5>
          {dataFetched && <BarChart data={topItemCounts} />}
        </div>
        <div>
          <h5> Item categories that have been distributed</h5>
          {dataFetched && <BarChart data={topCategoryCounts} />}
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <h5>Low Inventory Items</h5>
          {dataFetched && <BarChart data={lowInventoryCounts} />}
        </div>
        <div>
          <h5>Most Donated Items</h5>
          {dataFetched && <BarChart data={mostDonatedItemCount} />}
        </div>
      </div>
    </div>
  );
}

export default admin;
