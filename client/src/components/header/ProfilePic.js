import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ProfilePic = () => {

    const [profilePic, setProfilePic] = useState([]);

    useEffect(() => {
        axios.get('/api/profile')
        .then(res => {
            setProfilePic(res.data[0].profilePic);
        })
        .catch(err => {
            console.log(err);
        })
    });

    return (
        <div className="profilePic">
            <div className="mainImg" 
                style={{ backgroundImage: `url("${profilePic}")` }}
            ></div>
        </div>
    )
}

export default ProfilePic