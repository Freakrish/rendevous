import React from 'react'
import Logo from '../../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'
import './LogoSearch.css'

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
        <img src={Logo} className="logoo" alt=""/>
        <div className="Search">
            <input type="text" placeholder="#WannaWander" />
            <div className="s-icon">
                <UilSearch/>
            </div>
        </div>
    </div>

  )
}

export default LogoSearch
