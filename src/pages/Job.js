import React from 'react'
import JobDetail from '../conponents/JobDetail'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from "../context";

export default function Job() {
  const {id} = useParams();
  const {getJob} = useGlobalContext();
  let job = getJob(id);
  console.log(job)
  
  return (
    <JobDetail  job={job}/>
  )
}
