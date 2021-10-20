import React from 'react'
import './UserBoxData.scss'

const UserBoxData = ({public_repos, followers, following}) => {
   return (
      <div className="user-box-data">
         <div className="user-data">
            <h2>Repos</h2>
            <p>{public_repos}</p>
         </div>
         <div className="user-data">
            <h2>Seguidores</h2>
            <p>{followers}</p>
         </div>
         <div className="user-data">
            <h2>Seguindo</h2>
            <p>{following}</p>
         </div>
      </div>
   )
}

export default UserBoxData
