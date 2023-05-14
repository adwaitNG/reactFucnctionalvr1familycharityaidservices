import React, { useState } from 'react';
import { Navigate ,useNavigate } from "react-router-dom";
import axios from 'axios';

function generalInformationAidDonors () {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [mailingAddress, setMailingAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [preferredModeCommunication,setPreferredModeCommunication] = useState('')
    const [nameOrganization, setNameOrganization] = useState('')
    const [addressHeadquarter, setAddressHeadquarter] = useState('')
    const [namePrincipalContactPerson, setNamePrincipalContactPerson] = useState('')

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const doc = {
            name,
            age,
            mailingAddress,
            phoneNumber,
            email,
            preferredModeCommunication,
            nameOrganization,
            addressHeadquarter,
            namePrincipalContactPerson,
            typeOfForm: 'generalInformationAidDonors'
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
      <h1>General Information of Aid Donors</h1>
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

        <label htmlFor="name">Age:</label>
        <br />
        <input
          type="number"
          id="age"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />

        <label htmlFor="name">mailing Address:</label>
        <br />
        <input
          type="text"
          id="mailingAddress"
          name="mailingAddress"
          value={mailingAddress}
          onChange={(e) => setMailingAddress(e.target.value)}
        />
        <br />
      
        <label htmlFor="name">Phone Number:</label>
        <br />
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <br />

        <label htmlFor="name">Email:</label>
        <br />
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
      
        <label htmlFor="name">Preferred Mode of Communication:</label>
        <br />
        <input
          type="text"
          id="preferredModeCommunication"
          name="preferredModeCommunication"
          value={preferredModeCommunication}
          onChange={(e) => setPreferredModeCommunication(e.target.value)}
        />
        <br />

        <label htmlFor="name">Name of the Organization:</label>
        <br />
        <input
          type="text"
          id="nameOrganization"
          name="nameOrganization"
          value={nameOrganization}
          onChange={(e) => setNameOrganization(e.target.value)}
        />
        <br />

        <label htmlFor="name">Address of the Headquarter:</label>
        <br />
        <input
          type="text"
          id="addressHeadquarter"
          name="addressHeadquarter"
          value={addressHeadquarter}
          onChange={(e) => setAddressHeadquarter(e.target.value)}
        />
        <br />

        <label htmlFor="name">Name of Principal Contact Person:</label>
        <br />
        <input
          type="text"
          id="namePrincipalContactPerson"
          name="namePrincipalContactPerson"
          value={namePrincipalContactPerson}
          onChange={(e) => setNamePrincipalContactPerson(e.target.value)}
        />
        <br />

        

        <input
          type="text"
          id="typeOfForm"
          name="typeOfForm"
          value="generalInformationAidDonors"
          style={{ visibility: 'hidden' }}
        />
        <button type="submit" name="submit">
          Submit
        </button>
      </form>
    </div>
   )
}
export default generalInformationAidDonors