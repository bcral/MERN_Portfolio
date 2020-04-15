import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ProfileInfo = () => {

    const [Title, setTitle] = useState([]);
    const [Location, setLocation] = useState([]);
    const [Bio, setBio] = useState([]);

    useEffect(() => {
        axios.get('/api/profile')
        .then(res => {
            setTitle(res.data[0].title);
            setLocation(res.data[0].location);
            setBio(res.data[0].bio);
        })
        .catch(err => {
            console.log(err)
        })
    })

    return (
        <div className="profileInfo">
            <h2>{ Title }</h2>
            <span className="location">
                <img className="locIcon" 
                    alt="location icon" 
                    src={ require('../../data/icons/location_icon.png') }
                ></img>
                { Location }
            </span>
            <p className="profileBio">{ Bio }</p>
        </div>
    )
}

export default ProfileInfo
