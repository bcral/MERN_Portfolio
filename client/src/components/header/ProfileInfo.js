import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ProfileInfo = () => {

    const [Title, setTitle] = useState([]);
    const [Location, setLocation] = useState([]);
    const [Bio, setBio] = useState([]);
    const [Subs, setSubs] = useState([]);

    useEffect(() => {
        axios.get('/api/profile')
        .then(res => {
            setTitle(res.data[0].title);
            setLocation(res.data[0].location);
            setBio(res.data[0].bio);
            setSubs(res.data[0].subTitles);
        })
        .catch(err => {
            console.log(err);
        })
    })

    return (
        <div className="profileInfo">
            <div className="proRow">
                <div className="infoCluster">
                    <h2 className="title">{ Title }</h2>
                    <span className="location">
                        <img className="locIcon" 
                            alt="location icon" 
                            src={ require('../../data/icons/location_icon.png') }
                        ></img>
                        { Location }
                    </span>
                </div>
                <ul className="subTitles">
                { Subs.map(( sub, i) =>
                    <li key={ i } > { sub } </li>
                    )}
                </ul>
            </div>
            <div className="profileBio">
                <p className="bio">{ Bio }</p>
            </div>
        </div>
    )
}

export default ProfileInfo
