import axios from 'axios';
import { Navigate } from "react-router-dom";
import React, { useState } from 'react';


function LoginVolunteer() {
    const [login, setLogin] = useState(false);
    
    const verifyData = (e) =>{
        e.preventDefault()
        let doc = {
            name : event.target.name.value,
            pasword : event.target.pasword.value,
            typeOfForm : event.target.typeOfForm.value
        }
        let url = '/api/volunteer/login'
        console.log("Completed the form")
        axios.post(url, doc).then(
            (res)=> {
                console.log(res)
              // console.log(res.data[0].name == doc.name)

               if (res.data!= null && res.data.length > 0 && res.data[0].name == doc.name){
                setLogin(true)
               } else{
                alert('User NOT FOUND')
               }
          
            }
        ).catch( (err) => console.log(err))
    }
    
    if(login) {
        return(
        <Navigate replace to="/volunteerPage" />)
    } else {
        return(<div>
            <h1>Login Cred for Volunteer</h1>
            <form onSubmit={async (e) => {await verifyData(e)}}>
                <label for="name">Name:</label><br/>
                <input type="text" id="name" name="name"/><br/>
                <label for="pasword">Password:</label><br/>
                <input type="password" id="pasword" name="pasword"/><br/>
                <input type="text" id = "typeOfForm" name = "typeOfForm" value="volunteer" style={{visibility: 'hidden'}}/> 
                <button type='submit'>Login</button>
            </form>
        </div>)
    }   
    

}

export default LoginVolunteer