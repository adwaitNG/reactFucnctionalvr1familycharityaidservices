import express from 'express'
import generalinfo from './api/routes/generalInfo.route' 
import volunteer from './api/routes/volunteer.route' 
import admin from './api/routes/admin.route' 

const path = require('path')

const app = express()

const publicPath = path.join(__dirname, 'public')

app.use(express.static(publicPath))
app.use(express.json())
app.use(express.urlencoded({extended :true}))


//Register api
app.use('/api/generalInfo', generalinfo)

//User Authenticaiton 
app.use('/api/volunteer' ,volunteer);

//User Authenticaiton 
app.use('/api/admin' ,admin);

//Register web
app.use('/', express.static('public'))
app.use('/loginAdmin', express.static('public'))
app.use('/loginVolunteer', express.static('public'))
// app.use('/generalInfoForm', express.static('public'))


export default app

//ANUvXB2yYIPHuHi2