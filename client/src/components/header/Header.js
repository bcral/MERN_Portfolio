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
                <div className="center">
                    <ProfilePic></ProfilePic>
                    <ProfileInfo></ProfileInfo>
                </div>
            </div>
        </div>
    )
}

export default Header