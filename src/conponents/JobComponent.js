import React from 'react'
import { Link } from 'react-router-dom'

export default function JobComponent(item) {
  const {id, title, status} = item
  return (
    <div>
      <Link to={`/job/${id}`}>
        <span>{title}</span>
        <span>{status}</span>
      </Link>
    </div>
  )
}
