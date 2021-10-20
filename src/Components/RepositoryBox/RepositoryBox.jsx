import React from 'react'
import './RepositoryBox.scss'

const RepositoryBox = ({ name, description, html_url }) => {
   return (
      <a href={html_url} target="_blank" rel="noreferrer" className="repository-box">
         <h2>{name}</h2>
         <p>{description}</p>
      </a>
   )
}

export default RepositoryBox
