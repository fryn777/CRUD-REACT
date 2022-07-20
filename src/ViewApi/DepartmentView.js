import React, { useState, useEffect } from "react";
import departmentApi from "../api/departmentApi";

export default function DepartmentView() {


  const [department,setDepartment] =useState([])

  useEffect(()=>{
      departmentApi.list().then(data => {
          setDepartment(data)
      })
  })
return (
  <div>
      <h2>List of Departments</h2>
     
      <table>
      <th>Department ID</th>
      <th>Department Name</th>
      <th>Location ID</th>
          <tbody>
          {
            department && department.map(depart => (
                <tr key={depart.department_id}>
                 <td>{depart.department_id}</td>
                 <td>{depart.department_name}</td>
                 <td>{depart.location_id}</td>
                </tr>
            ))
        }
          </tbody>
      </table>
  </div>
)
}
