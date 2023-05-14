import { MongoClient } from 'mongodb';
import app from './server'
import GeneralInfoDAO from './dao/generalInfoDAO';
import Volunteer from './api/controllers/volunteer.controller';
import VolunteerDAO from './dao/volunteerDAO';
import AdminDAO from './dao/adminDAO';



const uri = "mongodb+srv://adwaitghanawat888873:ANUvXB2yYIPHuHi2@cluster0.4o1ik6n.mongodb.net/?retryWrites=true&w=majority";



MongoClient.connect(uri, {useNewUrlParser : true, connectTimeoutMS : 5000}).then(
    async (client) => {
        // inject clients into js
        GeneralInfoDAO.injectDB(client)
        VolunteerDAO.injectDB(client)
        AdminDAO.injectDB(client)
        const port = 3000
        app.listen(port, () => console.log(`App listening on port ${port}!`))
    }
).catch( (err) => {
    console.error(err.stack)
    throw err
})
