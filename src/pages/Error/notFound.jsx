import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <h1 style={{color: 'limegreen'}}>Page not found</h1>
      <Link to='/'>Back to Home</Link>
    </div>
  )
}

export default NotFound