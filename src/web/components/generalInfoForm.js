import React, { useState } from 'react';
import { Navigate ,useNavigate } from "react-router-dom";
import axios from 'axios';

function GeneralInfoForm () {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [address, setAddress] = useState('');
  const [familyMember, setFamilyMember] = useState('');
  const [partnerName, setPartnerName] = useState('');
  const [kidNum, setKidNum] = useState('');
  const [kidsName, setKidsName] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const doc = {
      name,
      birthday,
      address,
      familyMember,
      partnerName,
      kidNum,
      kidsName,
      typeOfForm: 'GeneralInformationofAidRecipients'
    };
    console.log(doc);
    const url = '/api/generalInfo/add';
    axios.post(url, doc).then((res) => {
        console.log(res);
        navigate("/volunteerPage");
       
    }).catch((err) => console.log(err));
   

  };

  return (
    <div>
      <h1>General Information of Aid Recipients</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <label htmlFor="birthday">Birthday:</label>
        <br />
        <input
          type="date"
          id="birthday"
          name="birthday"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
        <br />

        <label htmlFor="address">Address:</label>
        <br />
        <input
          type="text"
          id="address"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />

        <label htmlFor="familyMember">Family Members:</label>
        <br />
        <input
          type="number"
          id="familyMember"
          name="familyMember"
          value={familyMember}
          onChange={(e) => setFamilyMember(e.target.value)}
        />
        <br />

        <label htmlFor="partnerName">Name of Common Law Partner:</label>
        <br />
        <input
          type="text"
          id="partnerName"
          name="partnerName"
          value={partnerName}
          onChange={(e) => setPartnerName(e.target.value)}
        />
        <br />

        <label htmlFor="kidNum">Number Of kids:</label>
        <br />
        <input
          type="number"
          id="kidNum"
          name="kidNum"
          value={kidNum}
          onChange={(e) => setKidNum(e.target.value)}
        />
        <br />

        <label htmlFor="kidsName">Name of all kids:</label>
        <br />
        <textarea
          id="kidsName"
          name="kidsName"
          rows="4"
          cols="50"
          placeholder="Enter text here..."
          value={kidsName}
          onChange={(e) => setKidsName(e.target.value)}
        ></textarea>
        <br />

        <input
          type="text"
          id="typeOfForm"
          name="typeOfForm"
          value="GeneralInformationofAidRecipients"
          style={{ visibility: 'hidden' }}
        />
        <button type="submit" name="submit">
          Submit
        </button>
      </form>
    </div>
   )
}
export default GeneralInfoForm