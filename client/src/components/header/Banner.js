import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Banner = () => {

    const [fullName, setName] = useState([]);
    const [Email, setEmail] = useState([]);
    const [GH, setGH] = useState([]);
    const [LI, setLI] = useState([]);
    const [BP, setBP] = useState([]);

    useEffect(() => {
        axios.get('/api/profile')
        .then(res => {
            setName(res.data[0].name);
            setEmail(res.data[0].emailLink);
            setGH(res.data[0].githubLink);
            setLI(res.data[0].linkedinLink);
            setBP(res.data[0].bannerPic);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <div className="banner" style={{ backgroundImage: `url("${BP}")` }}>
            <div className="bannerLayer">
                <div className="links">
                    <a className="email"
                        href={ `mailto:${Email}` }
                        target="_blank"
                        rel="noopener noreferrer"
                    ><img 
                        alt="email icon"
                        src={require('../../data/icons/gmail_icon.svg')}
                        ></img>
                        <div className="linkText">
                            { Email }
                        </div>
                    </a>
                    <a className="github"
                        href={ GH }
                        target="_blank"
                        rel="noopener noreferrer"
                    ><img 
                        alt="github icon"
                        src={require("../../data/icons/github_icon.svg")}
                        ></img>
                        <div className="linkText">
                            Github
                        </div>
                    </a>
                    <a className="linkedin"
                        href={ LI }
                        target="_blank"
                        rel="noopener noreferrer"
                    ><img 
                        alt="linkedin icon"
                        src={require("../../data/icons/linkedin_icon.svg")}
                        ></img>
                        <div className="linkText">
                            LinkedIn
                        </div>
                    </a>
                </div>
                <div className="name">
                    <h1>{ fullName }</h1>
                </div>
            </div>
        </div>
    )
}

export default Banner