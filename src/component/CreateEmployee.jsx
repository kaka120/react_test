import React, { useState } from 'react'
//import EmployeeServices from '../services/EmployeeServices'

export const CreateEmployee = () => {
   const [credetials, setCredetials] = useState({
       firstName:"",lastName:"",dateOfBirth:"",designation:"",photoLink:"",experience:""
   })

   

    return (
        <React.Fragment>
            <form>
                 <table>
                        <thead><tr>Enter the following credetials</tr></thead>
                         <tr>
                             <td>Enter First Name</td> <td><input type="text" value={credetials.firstName} onChange={e=>setCredetials({...credetials, firstName:e.target.value})}/></td>
                         </tr>
                         <tr>
                             <td>Enter last Name</td> <td><input type="text" value={credetials.lastName} onChange={e=>setCredetials({...credetials, lastName:e.target.value})}/></td>
                         </tr>
                         <tr>
                             <td>Enter dateOfBirth</td> <td><input type="text" value={credetials.dateOfBirth} onChange={e=>setCredetials({...credetials, dateOfBirth:e.target.value})}/></td>
                         </tr>
                         <tr>
                             <td>Enter Designation</td> <td><input type="text" value={credetials.designation} onChange={e=>setCredetials({...credetials, designation:e.target.value})}/></td>
                         </tr>
                         <tr>
                             <td>photoLink</td> <td><input type="text" value={credetials.photoLink} onChange={e=>setCredetials({...credetials, photoLink:e.target.value})}/></td>
                         </tr>
                         <tr>
                             <td>Enter experience</td> <td><input type="text" value={credetials.experience} onChange={e=>setCredetials({...credetials, experience:e.target.value})}/></td>
                         </tr>
                 </table>
            </form>
        </React.Fragment>
    )
}

export default CreateEmployee;
