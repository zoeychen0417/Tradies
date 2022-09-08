import React from 'react'
import { useGlobalContext , useState, useEffect, useMemo} from 'react';
import statusOption from '../statusOption';
import allJobs from "../data"
import JobList from '../conponents/JobList'

export default function Filter({}) {
const [status, setStatus] = useState("");
const jobs = useMemo(() => {
  return allJobs.filter((job) => {
    const jobStatus = job.status.toLowerCase();
    return jobStatus.includes(status);
  });
},[status]);


  return (
    <>
    <section>
      <form>
        <div>
          <label htmlFor='status'>Job Status</label>
          <select name='status' id='status' value={status} onChange={(e)=>setStatus(e.target.value)}>
             {statusOption.map((item, index)=>{
                return(
                  <option value={item.value} key={index}>
                    {item.label}
                    </option>
                );
             })}
          </select>
        </div>
      </form>
    </section>
    <JobList jobs={jobs}/>
    </>
  )
}
