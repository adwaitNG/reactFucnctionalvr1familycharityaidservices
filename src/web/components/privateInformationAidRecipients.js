import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function privateInformationAidRecipients() {
  const [name, setName] = useState("");
  const [nationalityprincipal, setNationalityPrincipal] = useState("");
  const [nationalityfamily, setNationalityFamily] = useState("");
  const [nationalityDocName1, setNationalityDocName1] = useState("");
  const [nationalityDocNum1, setNationalityDocNum1] = useState("");
  const [nationalityDocExp1, setNationalityDocExp1] = useState("");
  const [nationalityDocName2, setNationalityDocName2] = useState("");
  const [nationalityDocNum2, setNationalityDocNum2] = useState("");
  const [nationalityDocExp2, setNationalityDocExp2] = useState("");
  const [nationalityDocName3, setNationalityDocName3] = useState("");
  const [nationalityDocNum3, setNationalityDocNum3] = useState("");
  const [nationalityDocExp3, setNationalityDocExp3] = useState("");
  const [file, setFile] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const doc = {
      name,
      nationalityprincipal,
      nationalityfamily,
      nationalityDocName1,
      nationalityDocNum1,
      nationalityDocExp1,
      nationalityDocName2,
      nationalityDocNum2,
      nationalityDocExp2,
      nationalityDocName3,
      nationalityDocNum3,
      nationalityDocExp3,
      file,
      typeOfForm: "privateInformationAidRecipients",
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
      <h1>Private Information of Aid Recipients</h1>
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

        <label htmlFor="name">Nationality of Principal:</label>
        <br />
        <input
          type="text"
          id="nationalityprincipal"
          name="nationalityprincipal"
          value={nationalityprincipal}
          onChange={(e) => setNationalityPrincipal(e.target.value)}
        />
        <br />

        <label htmlFor="name">Nationality of Family:</label>
        <br />
        <input
          type="text"
          id="nationalityfamily"
          name="nationalityfamily"
          value={nationalityfamily}
          onChange={(e) => setNationalityFamily(e.target.value)}
        />
        <br />

        <label htmlFor="name">Name of Nationality document:</label>
        <br />
        <input
          type="text"
          id="nationalityDocName1"
          name="nationalityDocName1"
          value={nationalityDocName1}
          onChange={(e) => setNationalityDocName1(e.target.value)}
        />
        <br />

        <label htmlFor="name">Nationality document Number:</label>
        <br />
        <input
          type="text"
          id="nationalityDocNum1"
          name="nationalityDocNum1"
          value={nationalityDocNum1}
          onChange={(e) => setNationalityDocNum1(e.target.value)}
        />
        <br />

        <label htmlFor="name">Nationality document Expiry:</label>
        <br />
        <input
          type="date"
          id="nationalityDocExp1"
          name="nationalityDocExp1"
          value={nationalityDocExp1}
          onChange={(e) => setNationalityDocExp1(e.target.value)}
        />
        <br />

        <label htmlFor="name">Name of Nationality document:</label>
        <br />
        <input
          type="text"
          id="nationalityDocName2"
          name="nationalityDocName2"
          value={nationalityDocName2}
          onChange={(e) => setNationalityDocName2(e.target.value)}
        />
        <br />

        <label htmlFor="name">Nationality document Number:</label>
        <br />
        <input
          type="text"
          id="nationalityDocNum2"
          name="nationalityDocNum2"
          value={nationalityDocNum2}
          onChange={(e) => setNationalityDocNum2(e.target.value)}
        />
        <br />

        <label htmlFor="name">Nationality document Expiry:</label>
        <br />
        <input
          type="date"
          id="nationalityDocExp2"
          name="nationalityDocExp2"
          value={nationalityDocExp2}
          onChange={(e) => setNationalityDocExp2(e.target.value)}
        />
        <br />

        <label htmlFor="name">Name of Nationality document:</label>
        <br />
        <input
          type="text"
          id="nationalityDocName3"
          name="nationalityDocName3"
          value={nationalityDocName3}
          onChange={(e) => setNationalityDocName3(e.target.value)}
        />
        <br />

        <label htmlFor="name">Nationality document Number:</label>
        <br />
        <input
          type="text"
          id="nationalityDocNum3"
          name="nationalityDocNum3"
          value={nationalityDocNum3}
          onChange={(e) => setNationalityDocNum3(e.target.value)}
        />
        <br />

        <label htmlFor="name">Nationality document Expiry:</label>
        <br />
        <input
          type="date"
          id="nationalityDocExp3"
          name="nationalityDocExp3"
          value={nationalityDocExp3}
          onChange={(e) => setNationalityDocExp3(e.target.value)}
        />
        <br />

        <label htmlFor="files">Nationality documents:</label>
        <br />
        <input
          type="file"
          id="file"
          name="file"
          value={file}
          multiple
          onChange={(e) => setFile(e.target.value)}
        />
        <br />

        <button type="submit" name="submit" className="btn btn-info">
          Submit
        </button>
      </form>
    </div>
  );
}
export default privateInformationAidRecipients;
