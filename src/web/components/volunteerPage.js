import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

function volunteerPage() {
  return (
    <div class="row text-center">
      <br />
      <Link to="/generalInfoForm" className="btn">
        General Information of Aid Recipients
      </Link>
      <br />
      <Link to="/privateInformationAidRecipients" className="btn">
        Private Information of Aid Recipients
      </Link>
      <br />
      <Link to="/generalInformationAidDonors" className="btn">
        General Information of Aid Donors
      </Link>
      <br />
      <Link to="/privateInformationAidDonors" className="btn">
        Private Information of Aid Donors
      </Link>
      <br />
      <Link to="/creationAidCategoriesKits" className="btn">
        Creation of Aid category
      </Link>
      <br />
      <Link to="/createItems" className="btn">
        Creation of Aid item
      </Link>
      <br />
      <Link to="/createKits" className="btn">
        Creation of Aid Kit
      </Link>
      <br />
      <Link to="/requisitionitemsRecipients" className="btn">
        Requisition of items from Aid Recipients
      </Link>
      <br />
      <Link to="/receivingitemsDonors" className="btn">
        Receiving of items from Aid Donors
      </Link>
      <br />
      <Link to="/loginAdmin" className="btn">
        Login to Admin
      </Link>
    </div>
  );
}

export default volunteerPage;
