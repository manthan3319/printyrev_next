import React from 'react'
import Home from './Home/page'
import UserTopline from './User-Topline/page'
import UserNavbar from './UserNavbar/page'

const page = () => {
  return (
    <div className='user-side'>
      <UserTopline/>
      <UserNavbar/>
      <Home/>
    </div>
  )
}

export default page
