

let generalInfoConn;

export default class GeneralInfoDAO {

    static async injectDB(conn){
        if ( this.generalInfoConn)
             return
        try{
            this.generalInfoConn = await conn.db("SPM2")
        }catch(e){
            console.error(e)
        }
    }

    static async  insertDoc(doc, collectionName) {
        try {
    
          let resp = await this.generalInfoConn.collection(collectionName).insertOne(doc)
          return resp
    
        } catch(e){
            console.error(e)
        }
      }
    
      static async find(doc, collectionName) {
        try {
    
          let resp = await this.generalInfoConn.collection(collectionName).find({name:doc.name, pasword: doc.pasword }).toArray();
          
          return resp
          
    
        } catch(e){
            console.error(e)
        }
      }

      static async findCategoriesKitsCount(collectionName) {
        try {
          let result = {}
          let aggResult =  await this.generalInfoConn.collection(collectionName).aggregate([{"$group" : {_id:"$itemName", count:{$sum:1}}}]);
          for await (const doc of aggResult) {
            result[doc._id] = doc.count
          }
          return result
    
        } catch(e){
            console.error(e)
        }
      }
      static async findCategoriesKits(collectionName) {
        try {
          
          let aggResult =  await this.generalInfoConn.collection(collectionName).find().toArray();
          return aggResult
    
        } catch(e){
            console.error(e)
        }
      }

      static async fetchDonor(collectionName) {
        try {
          
          let aggResult =  await this.generalInfoConn.collection(collectionName).find().toArray();
          return aggResult
    
        } catch(e){
            console.error(e)
        }
      }

      static async fetchKits(collectionName) {
        try {
          
          let aggResult =  await this.generalInfoConn.collection(collectionName).find().toArray();
          return aggResult
    
        } catch(e){
            console.error(e)
        }
      }
       
      static async fetchItems(collectionName) {
        try {
          
          let aggResult =  await this.generalInfoConn.collection(collectionName).find().toArray();
          return aggResult
    
        } catch(e){
            console.error(e)
        }
      }
      
}