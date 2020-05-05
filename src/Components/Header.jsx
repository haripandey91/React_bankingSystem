import React from 'react'

const Header=({heading}) =>{
    return (
        <div className="header">
            <h3 className="header-logo">{heading}</h3>
        </div>
    )
}

export default Header