import React from 'react'
import './UserBoxHeader.scss'

const UserBoxHeader = ({avatar_url, name, location, login }) => {
   return (
      <div className="user-box-header">
         <img className="user-image" src={avatar_url} alt={name}/>
         <div className="user-box-content">
            <h1>{name}</h1>
            <strong>{login}</strong>
            <p>{location}</p>
         </div>
      </div>
   )
}

export default UserBoxHeader
