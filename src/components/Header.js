import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person'
import { IconButton } from '@material-ui/core'
import ForumIcon from '@material-ui/icons/Forum'

const Header = () => {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon
                    fontSize="large"
                    className="header_icon"/>
            </IconButton>

            <img className="header_logo"
                src="https://www.pngkit.com/png/detail/73-730019_tinder-logo-transparent-tinder-logo-png.png"
                alt="" />
            
            <IconButton>
                <ForumIcon
                    fontSize="large"
                    className="header_icon" />
            </IconButton>
        </div>
    )
}

export default Header
