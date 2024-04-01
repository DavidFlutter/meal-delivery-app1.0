import React from 'react'
import { Link } from 'react-router-dom'

const LoginAsCheftBtn = () => {
  return (
    <Link className='LoginAsCheftBtn' to={"/login"}>        
        Login as Chef        
    </Link>
  )
}

export default LoginAsCheftBtn