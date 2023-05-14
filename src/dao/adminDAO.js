let volunteerConn;

export default class AdminDAO {
  static async injectDB(conn) {
    if (this.volunteerConn) {
      console.log("connection already estabilished for mongo db Admin");
      return;
    }
    try {
      let volunteer = await conn.db("SPM2");
      this.volunteerConn = volunteer;
      console.log("connection estabilished for mongo db Admin");
    } catch (e) {
      console.error(e);
    }
  }

  static async insertDoc(doc) {
    try {
      let resp = await this.volunteerConn.collection("admin").insertOne(doc);
      return resp;
    } catch (e) {
      console.error(e);
    }
  }

  static async find(doc) {
    try {
      let resp = await this.volunteerConn
        .collection("admin")
        .find({ name: doc.name, pasword: doc.pasword })
        .toArray();

      return resp;
    } catch (e) {
      console.error(e);
    }
  }
}
