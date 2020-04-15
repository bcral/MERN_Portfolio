import React from 'react'
import Banner from './Banner'
import ProfilePic from './ProfilePic'
import ProfileInfo from './ProfileInfo'
import './headStyles.css'

const Header = () => {

    return (
        <div>
            <Banner></Banner>
            <div className="infoBox">
                <ProfilePic></ProfilePic>
                <ProfileInfo></ProfileInfo>
            </div>
        </div>
    )
}

export default Header