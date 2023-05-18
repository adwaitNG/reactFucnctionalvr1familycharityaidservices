// import React, { useState, useEffect } from "react";
// import { Navigate, useNavigate } from "react-router-dom";
// import axios from "axios";

// function receivingitemsDonors() {
//   const navigate = useNavigate();
//   const [dataFetched, setDataFetched] = useState(false);

//   const [donors, setDonors] = useState([]);
//   const [items, setItems] = useState([]);
//   const [kits, setKits] = useState([]);

//   useEffect(() => {
//     const url1 = "/api/generalInfo/fetchItems";
//     const url2 = "/api/generalInfo/fetchDonor";
//     const url3 = "/api/generalInfo/fetchKits";

//     axios.get(url1).then((res) => {
//       setItems(res.data);
//       setDataFetched(true);
//     });
//     axios.get(url2).then((res) => {
//       setDonors(res.data);
//       setDataFetched(true);
//     });
//     axios.get(url3).then((res) => {
//       setKits(res.data);
//       setDataFetched(true);
//     });
//   }, []);

//   return (
//     <div>
//       {donors.map((donor) => (
//         <div key={donor.id}>
//           <table>
//             <tbody>
//               <tr>
//                 <td>Donor Name: </td>
//                 <td>{donor.name}</td>
//               </tr>
//               <tr>
//                 <td>Items: </td>
//                 <td>
//                   <table>
//                     <tbody>
//                       {items
//                         .filter((item) => item.donor === donor.name)
//                         .reduce((acc, item) => {
//                           const itemName = item.itemName;
//                           const existingItem = acc.find(
//                             (i) => i.itemName === itemName
//                           );
//                           if (existingItem) {
//                             existingItem.count++;
//                           } else {
//                             acc.push({ itemName: itemName, count: 1 });
//                           }
//                           return acc;
//                         }, [])
//                         .map((item) => (
//                           <tr key={item.itemName}>
//                             <td>{item.itemName}</td>
//                             <td>{item.count}</td>
//                           </tr>
//                         ))}
//                     </tbody>
//                   </table>
//                 </td>
//               </tr>
//               <tr>
//                 <td>Kits: </td>
//                 <td>
//                   <table>
//                     <tbody>
//                       {kits
//                         .filter((kit) => kit.donor === donor.name)
//                         .map((kit) => (
//                           <tr key={kit.id}>
//                             <td>{kit.kitName}</td>
//                           </tr>
//                         ))}
//                     </tbody>
//                   </table>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default receivingitemsDonors;

// import React, { useState, useEffect } from "react";
// import { Navigate, useNavigate } from "react-router-dom";
// import axios from "axios";

// function receivingitemsDonors() {
//   const navigate = useNavigate();
//   const [dataFetched, setDataFetched] = useState(false);

//   const [donors, setDonors] = useState([]);
//   const [items, setItems] = useState([]);
//   const [kits, setKits] = useState([]);

//   useEffect(() => {
//     const url1 = "/api/generalInfo/fetchItems";
//     const url2 = "/api/generalInfo/fetchDonor";
//     const url3 = "/api/generalInfo/fetchKits";

//     axios.get(url1).then((res) => {
//       setItems(res.data);
//       setDataFetched(true);
//     });
//     axios.get(url2).then((res) => {
//       setDonors(res.data);
//       setDataFetched(true);
//     });
//     axios.get(url3).then((res) => {
//       setKits(res.data);
//       setDataFetched(true);
//     });
//   }, []);

//   return (
//     <div>
//       {donors.map((donor) => (
//         <div key={donor.id}>
//           <table>
//             <thead>
//               <tr>
//                 <th>Donor </th>
//                 <th>Item </th>
//                 <th>Kit </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>{donor.name}</td>
//                 <td>
//                   <table>
//                     <tbody>
//                       {items
//                         .filter((item) => item.donor === donor.name)
//                         .reduce((acc, item) => {
//                           const itemName = item.itemName;
//                           const existingItem = acc.find(
//                             (i) => i.itemName === itemName
//                           );
//                           if (existingItem) {
//                             existingItem.count++;
//                           } else {
//                             acc.push({ itemName: itemName, count: 1 });
//                           }
//                           return acc;
//                         }, [])
//                         .map((item) => (
//                           <tr key={item.itemName}>
//                             <td>{item.itemName}</td>
//                             <td>{item.count}</td>
//                           </tr>
//                         ))}
//                     </tbody>
//                   </table>
//                 </td>
//                 <td>
//                   <table>
//                     <tbody>
//                       {kits
//                         .filter((kit) => kit.donor === donor.name)
//                         .map((kit) => (
//                           <tr key={kit.id}>
//                             <td>{kit.kitName}</td>
//                           </tr>
//                         ))}
//                     </tbody>
//                   </table>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default receivingitemsDonors;

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
      <table className="table">
        <thead>
          <tr>
            <th>Donor </th>
            <th>Item </th>
            <th>Kit </th>
          </tr>
        </thead>
        <tbody>
          {donors.map((donor) => (
            <tr key={donor.id}>
              <td>{donor.name}</td>
              <td>
                <table className="table">
                  <tbody>
                    {items
                      .filter((item) => item.donor === donor.name)
                      .reduce((acc, item) => {
                        const itemName = item.itemName;
                        const existingItem = acc.find(
                          (i) => i.itemName === itemName
                        );
                        if (existingItem) {
                          existingItem.count++;
                        } else {
                          acc.push({ itemName: itemName, count: 1 });
                        }
                        return acc;
                      }, [])
                      .map((item) => (
                        <tr key={item.itemName}>
                          <td>{item.itemName}</td>
                          <td>{item.count}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </td>
              <td>
                <table className="table">
                  <tbody>
                    {kits
                      .filter((kit) => kit.donor === donor.name)
                      .reduce((acc, kit) => {
                        const kitName = kit.kitName;
                        const existingKit = acc.find(
                          (k) => k.kitName === kitName
                        );
                        if (existingKit) {
                          existingKit.count++;
                        } else {
                          acc.push({ kitName: kitName, count: 1 });
                        }
                        return acc;
                      }, [])
                      .map((kit) => (
                        <tr key={kit.kitName}>
                          <td>{kit.kitName}</td>
                          <td>{kit.count}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default receivingitemsDonors;
