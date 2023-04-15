import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const User = () => {

  const params = useParams();
  console.log(params);
  const navigation = useNavigate();

  return (
    <div className='User'>
       <button onClick={()=>{navigation("/about")}}>CLICK ME</button>
    </div>
  )

}

export default User
