import React from 'react'
import { facebookIcon, instagramIcon, githubIcon } from '../icons/index'
import './css/IconsHeader.css'

const IconsHeader = () => {

    const onFbIconClick = () => {
        window.open("")
    }
    const onIgIconClick = () => {
        window.open("")
    }
    const onGhIconClick = () => {
        window.open("")
    }

    return (
        <div id="icons">
            <div className="fbIcon" onClick={onFbIconClick}>{facebookIcon}</div>
            <div className="igIcon" onClick={onIgIconClick}>{instagramIcon}</div>
            <div className="ghIcon" onCLick={onGhIconClick}>{githubIcon}</div>
        </div>
    )
}

export default IconsHeader
