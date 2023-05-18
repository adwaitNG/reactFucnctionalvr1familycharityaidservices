import axios from "axios";
import { Navigate } from "react-router-dom";
import React, { useState } from "react";

function LoginVolunteer() {
  const [login, setLogin] = useState(false);

  const verifyData = (e) => {
    e.preventDefault();
    let doc = {
      name: event.target.name.value,
      pasword: event.target.pasword.value,
      typeOfForm: event.target.typeOfForm.value,
    };
    let url = "/api/volunteer/login";
    console.log("Completed the form");
    axios
      .post(url, doc)
      .then((res) => {
        console.log(res);
        // console.log(res.data[0].name == doc.name)

        if (
          res.data != null &&
          res.data.length > 0 &&
          res.data[0].name == doc.name
        ) {
          setLogin(true);
        } else {
          alert("User NOT FOUND");
        }
      })
      .catch((err) => console.log(err));
  };

  if (login) {
    return <Navigate replace to="/volunteerPage" />;
  } else {
    return (
      <div class="row text-center">
        <br />
        <h3>Login Credentials for Volunteer</h3>
        <form
          onSubmit={async (e) => {
            await verifyData(e);
          }}
        >
          <div class="col-md-12 col-sm-6">
            <label for="name">Name:</label>
            <br />
            <input type="text" id="name" name="name" />
            <br />
          </div>
          <div class="col-md-12 col-sm-6">
            <label for="pasword">Password:</label>
            <br />
            <input type="password" id="pasword" name="pasword" />
            <br />
          </div>
          <div class="col-md-12 col-sm-6">
            <input
              type="text"
              id="typeOfForm"
              name="typeOfForm"
              value="volunteer"
              style={{ visibility: "hidden" }}
            />
            <br />
            <button class="btn btn-primary" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginVolunteer;
