import React from 'react'
import {BrowserRouter, Link} from'react-router-dom';

function volunteerPage () {
    return(
        <div>
            <ul>
                <li>
                    <Link to = '/generalInfoForm' className='btn'>
                        General Information of Aid Recipients
                    </Link>
                </li>
                <li>
                    <Link to = '/privateInformationAidRecipients' className='btn'>
                        Private Information of Aid Recipients
                    </Link>
                </li>
                <li>
                    <Link to = '/generalInformationAidDonors' className='btn'>
                        General Information of Aid Donors
                    </Link>
                </li>
                <li>
                    <Link to = '/privateInformationAidDonors' className='btn'>
                        Private Information of Aid Donors
                    </Link>
                </li>
                <li>
                    <Link to = '/creationAidCategoriesKits' className='btn'>
                        Creation of Aid category
                    </Link>
                </li>
                <li>
                    <Link to = '/createItems' className='btn'>
                        Creation of Aid item
                    </Link>
                
                </li>
                <li>
                    <Link to = '/createKits' className='btn'>
                        Creation of Aid Kit
                    </Link>
                </li>
                <li>
                    <Link to = '/requisitionitemsRecipients' className='btn'>
                        Requisition of items from Aid Recipients
                    </Link>
                </li>
                <li>
                    <Link to = '/receivingitemsDonors' className='btn'>
                        Receiving of items from Aid Donors
                    </Link>
                </li>
            </ul>
            <Link to = '/loginAdmin' className='btn'>                     
                Login to Admin
            </Link>
        </div>
    )
}

export default volunteerPage