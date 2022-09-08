import React , {useContext, useState}from 'react'
import jobs from './data'


const JobContext = React.createContext();
const JobProvider = ({children}) => {
  const [status,setStatus] = useState("");


  const getJob = (id) => {
    let single = jobs.find((job)=>job.id === id);
    return single;
  }

  return <JobContext.Provider value = {{getJob,status}}>
    {children}
  </JobContext.Provider>
}

export const useGlobalContext = ()=>{
  return useContext(JobContext)
}
export {JobProvider, JobContext}
