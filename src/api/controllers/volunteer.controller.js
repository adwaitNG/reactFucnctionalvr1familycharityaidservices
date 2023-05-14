import VolunteerDAO from "../../dao/volunteerDAO"
import GeneralInfoDAO from "../../dao/volunteerDAO"

export default class Volunteer {



    static async add(req, res){
        console.log(req.body)
        let typeOfForm = req.body.typeOfForm 
        let resp = "" 
       
            resp = await VolunteerDAO.insertDoc(doc)

      
        res.json(resp)
        
    }

    static async fetch(req, res){
        let resp = "" 
        const doc = {
            name : req.body.name,
            pasword : req.body.pasword,
            typeOfForm : req.body.typeOfForm
        }
        resp =await VolunteerDAO.find(doc)
        res.json(resp)
    }
}



