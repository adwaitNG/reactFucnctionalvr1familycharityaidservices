import React from "react";
import GeneralInfoForm from "./generalInfoForm";
import LoginVolunteer from "./loginvolunteer";

function Welcome() {
  return (
    <div>
      <div>
        <LoginVolunteer />
      </div>
    </div>
  );
}
{
  /* <ul>
<li>
    <Link to = '/loginVolunteer' className='btn'>
        Login to Volunteer
    </Link>
</li>
<li>
    <Link to = '/loginAdmin' className='btn'>                     
        Login to Admin
     </Link>
</li>

     
</ul> */
}

export default Welcome;

// export default class Welcome extends React.Component {

//     state = {generalForm :false}

//     handleSubmit=(e) => {
//         e.preventDefault()
//         this.setState( ()=> { return {generalForm : true}})

//     }

//     render() {
//         return <div>

//             {!this.state.generalForm && (<div>
//                 This is a welcome page
//                 <Link to = '/loginVolunteer' className='btn'>
//                     Login to Volunteer
//                 </Link>
//                 <Link to = '/loginAdmin' className='btn'>
//                     Login to Admin
//                 </Link>

//                 {/* <button color="link" className="px-0" onClick={this.handleSubmit}>Volunteer Login</button> */}

//             </div>)
//             }
//             {this.state.generalForm && <GeneralInfoForm />}
//         </div>
//     }
// }
