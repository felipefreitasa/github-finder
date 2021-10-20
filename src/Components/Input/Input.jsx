import React from 'react'
import './Input.scss'
import { Icon } from '@iconify/react';

const Input = ({ onChange, value, onClick }) => {
   return (
      <div className="input">
         <Icon icon="bx:bx-search" color="#0079fd" width="20" height="20" />
         <input
            type="text"
            placeholder="Pesquisar usuário GitHub..."
            value={value}
            onChange={onChange}
         />
         <button onClick={onClick}>Buscar</button>
      </div>
   )
}

export default Input
