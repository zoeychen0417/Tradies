import React from 'react'
import { Link } from 'react-router-dom'
import JobComponent from './JobComponent'

export default function JobList({jobs}) {
  
  return (
   <ul>
     {jobs.map((item,index)=>{
       return (
          <Link to={`/job/${item.id}`} key={index}>
            <JobComponent {...item} />
          </Link>
       )
     })}
   </ul>
  )
}
