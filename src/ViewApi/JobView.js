import React, { useState, useEffect } from "react";
import jobApi from "../api/jobApi";

export default function JobView() {


  const [job,setJob] =useState([])

  useEffect(()=>{
      jobApi.list().then(data => {
          setJob(data)
      })
  })
return (
  <div>
      <h2>List of Jobs</h2>
     
      <table>
      <th>Job ID</th>
      <th>Job Title</th>
      <th>Min Salary</th>
      <th>Max Salary</th>

      
          <tbody>
          {
            job && job.map(job => (
                <tr key={job.job_id}>
                 <td>{job.job_id}</td>
                 <td>{job.job_title}</td>
                 <td>{job.min_salary}</td>
                 <td>{job.max_salary}</td>
              
                </tr>
            ))
        }
          </tbody>
      </table>
  </div>
)
}
