import React from 'react'

export default function JobDetail ({job})  {
const {title, date, status, name, contact, notes} = job
      return (
        <article>
            <div>{title}</div>
            <div>{name}</div>
            <div>{status}</div>
            <div>{date}</div>
            <div>{contact}</div>
            <ul>
              {notes.map((item,index)=>{
                return(
                <li key={index}>{item.content}</li>
                )
              })}
            </ul>
        </article>
      )
   }
