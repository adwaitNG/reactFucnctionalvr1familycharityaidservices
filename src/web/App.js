import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./components/welcome";
import LoginAdmin from "./components/loginadmin";
import LoginVolunteer from "./components/loginvolunteer";
import VolunteerPage from "./components/volunteerPage";
import GeneralInfoForm from "./components/generalInfoForm";
import PrivateInformationAidRecipients from "./components/privateInformationAidRecipients";
import GeneralInformationAidDonors from "./components/generalInformationAidDonors";
import PrivateInformationAidDonors from "./components/privateInformationAidDonors";
import CreationAidCategoriesKits from "./components/creationAidCategoriesKits";
import CreatItem from "./components/creatItems";
import CreateKits from "./components/createKits";
import RequisitionItemsRecipients from "./components/requisitionitemsRecipients";
import ReceivingitemsDonors from "./components/receivingitemsDonors";
import AdminPage from "./components/adminPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/loginVolunteer" element={<LoginVolunteer />} />
        <Route path="/loginAdmin" element={<LoginAdmin />} />
        <Route path="/volunteerPage" element={<VolunteerPage />} />
        <Route path="/generalInfoForm" element={<GeneralInfoForm />} />
        <Route path="/privateInformationAidRecipients" element={<PrivateInformationAidRecipients />} />
        <Route path="/generalInformationAidDonors" element={<GeneralInformationAidDonors />}/>
        <Route path="/privateInformationAidDonors" element={<PrivateInformationAidDonors />} />
        <Route path="/creationAidCategoriesKits" element={<CreationAidCategoriesKits />}/>
        <Route path="/createItems" element={<CreatItem />} />
        <Route path="/createKits" element={<CreateKits />} />
        <Route path="/requisitionitemsRecipients" element={<RequisitionItemsRecipients />} />
        <Route path="/receivingitemsDonors" element={<ReceivingitemsDonors />} />
        <Route path="/adminPage" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
