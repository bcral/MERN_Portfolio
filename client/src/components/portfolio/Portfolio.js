import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PortfolioItem from './PortfolioItem'
import './portfolioStyles.css'

const Portfolio = () => {

    const [projects, setProject] = useState([]);

    useEffect(() => {
        axios.get('/api/projects')
        .then(res => {
            setProject(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className="portfolioBody">
            <h3>PORTFOLIO</h3>
            <hr></hr>
            {projects.map((project, i) =>
            <PortfolioItem key={ i } project={ project }></PortfolioItem>)}
        </div>
    )
}

export default Portfolio
