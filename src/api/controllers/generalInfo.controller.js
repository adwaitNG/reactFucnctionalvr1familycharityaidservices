import GeneralInfoDAO from "../../dao/generalInfoDAO";

export default class GeneralInfo {
  static async add(req, res) {
    console.log(req.body);
    let typeOfForm = req.body.typeOfForm;
    let resp = "";
    if (typeOfForm == "GeneralInformationofAidRecipients") {
      const doc = {
        name: req.body.name,
        birthday: req.body.birthday,
        address: req.body.address,
        familyMember: req.body.familyMember,
        partnerName: req.body.partnerName,
        kidNum: req.body.kidNum,
        kidsName: req.body.kidsName,
      };
      resp = GeneralInfoDAO.insertDoc(doc, "GeneralInformationofAidRecipients");
    } else if (typeOfForm == "privateInformationAidRecipients") {
      const doc = {
        name: req.body.name,
        nationalityprincipal: req.body.nationalityprincipal,
        nationalityfamily: req.body.nationalityfamily,
        nationalityDocName1: req.body.nationalityDocName1,
        nationalityDocNum1: req.body.nationalityDocNum1,
        nationalityDocExp1: req.body.nationalityDocExp1,
        nationalityDocName2: req.body.nationalityDocName2,
        nationalityDocNum2: req.body.nationalityDocNum2,
        nationalityDocExp2: req.body.nationalityDocExp2,
        nationalityDocName3: req.body.nationalityDocName3,
        nationalityDocNum3: req.body.nationalityDocNum3,
        nationalityDocExp3: req.body.nationalityDocExp3,
        file: req.body.file,
      };
      resp = GeneralInfoDAO.insertDoc(doc, "privateInformationAidRecipients");
    } else if (typeOfForm == "generalInformationAidDonors") {
      const doc = {
        name: req.body.name,
        age: req.body.age,
        mailingAddress: req.body.mailingAddress,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        preferredModeCommunication: req.body.preferredModeCommunication,
        nameOrganization: req.body.nameOrganization,
        addressHeadquarter: req.body.addressHeadquarter,
        namePrincipalContactPerson: req.body.namePrincipalContactPerson,
      };
      resp = GeneralInfoDAO.insertDoc(doc, "generalInformationAidDonors");
    } else if (typeOfForm == "privateInformationAidDonors") {
      const doc = {
        name: req.body.name,
        nationalityDonors: req.body.nationalityDonors,
        nationalityDocName1: req.body.nationalityDocName1,
        nationalityDocNum1: req.body.nationalityDocNum1,
        nationalityDocExp1: req.body.nationalityDocExp1,
        nationalityDocName2: req.body.nationalityDocName2,
        nationalityDocNum2: req.body.nationalityDocNum2,
        nationalityDocExp2: req.body.nationalityDocExp2,
        nationalityDocName3: req.body.nationalityDocName3,
        nationalityDocNum3: req.body.nationalityDocNum3,
        nationalityDocExp3: req.body.nationalityDocExp3,
        file: req.body.file,
      };
      resp = GeneralInfoDAO.insertDoc(doc, "privateInformationAidDonors");
    } else if (typeOfForm == "creationAidCategoriesKits") {
      const doc = {
        itemName: req.body.itemName,
        status: req.body.status,
      };
      resp = GeneralInfoDAO.insertDoc(doc, "creationAidCategoriesKits");
    } else if (typeOfForm == "createItems") {
      const doc = {
        itemName: req.body.itemName,
        category: req.body.category,
        donor: req.body.donor,
        itemDes: req.body.itemDes,
      };
      resp = GeneralInfoDAO.insertDoc(doc, "createItems");
    } else if (typeOfForm == "createkit") {
      const doc = {
        kitName: req.body.kitName,
        donor: req.body.donor,
        kitDes: req.body.kitDes,
      };
      resp = GeneralInfoDAO.insertDoc(doc, "createkit");
    } else if (typeOfForm == "requisitionitemsAidRecipients") {
      const doc = {
        kitsData: req.body.kitsData,
        itemData: req.body.itemData,
      };
      resp = GeneralInfoDAO.insertDoc(doc, "requisitionitemsAidRecipients");
    }

    res.json(resp);
  }

  static async fetchCategoriesKitsCount(req, res) {
    let resp = await GeneralInfoDAO.findCategoriesKitsCount(
      "creationAidCategoriesKits"
    );
    res.json(resp);
  }
  static async fetchCategoriesKits(req, res) {
    let resp = await GeneralInfoDAO.findCategoriesKits(
      "creationAidCategoriesKits"
    );
    res.json(resp);
  }

  static async fetchDonor(req, res) {
    let resp = await GeneralInfoDAO.fetchDonor("generalInformationAidDonors");
    res.json(resp);
  }

  static async fetchKits(req, res) {
    let resp = await GeneralInfoDAO.fetchKits("createkit");
    res.json(resp);
  }

  static async fetchItems(req, res) {
    let resp = await GeneralInfoDAO.fetchItems("createItems");
    res.json(resp);
  }

  static async fetchrequisitionitemsAidRecipients(req, res) {
    let resp = await GeneralInfoDAO.fetchItems("requisitionitemsAidRecipients");
    res.json(resp);
  }

  
}
