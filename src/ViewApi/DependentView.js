import React, { useState, useEffect } from "react";
import dependentApi from "../api/dependentApi";

export default function DependentView() {


  const [dependent,setDependent] =useState([])

  useEffect(()=>{
      dependentApi.list().then(data => {
          setDependent(data)
      })
  })
return (
  <div>
      <h2>List of Dependents</h2>
     
      <table>
      <th>Dependent ID</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Relationship</th>
      <th>Employee ID</th>
          <tbody>
          {
            dependent && dependent.map(depent => (
                <tr key={depent.dependent_id}>
                 <td>{depent.dependent_id}</td>
                 <td>{depent.first_name}</td>
                 <td>{depent.last_name}</td>
                 <td>{depent.relationship}</td>
                 <td>{depent.employee_id}</td>
                </tr>
            ))
        }
          </tbody>
      </table>
  </div>
)
}
