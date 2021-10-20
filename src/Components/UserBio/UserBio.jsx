import React from 'react'
import './UserBio.scss'

const UserBio = ({bio}) => {
   return (
      <p className="user-bio">{bio}</p>
   )
}

export default UserBio
