import AdminDAO from "../../dao/adminDAO"
import GeneralInfoDAO from "../../dao/volunteerDAO"

export default class Admin {



    static async add(req, res){
        console.log(req.body)
        let typeOfForm = req.body.typeOfForm 
        let resp = "" 
       
            resp = await AdminDAO.insertDoc(doc)

      
        res.json(resp)
        
    }

    static async fetch(req, res){
        let resp = "" 
        const doc = {
            name : req.body.name,
            pasword : req.body.pasword,
            typeOfForm : req.body.typeOfForm
        }
        resp =await AdminDAO.find(doc)
        res.json(resp)
    }
}



