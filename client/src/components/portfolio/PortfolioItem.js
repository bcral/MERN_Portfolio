import React, { Component } from 'react'
import Widget from './Widget'

export class PortfolioItem extends Component {

    render() {
        const project = this.props.project;
        let button1;
        let button2;
        let display;

        if (project.buttons.github) {
            button1 = <a  href={project.buttons.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button">
                        <div>
                            GITHUB REPO
                        </div>
                    </a>;
        }
        if (project.buttons.directLink) {
            button2 = <a  href={project.buttons.directLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button">
                        <div 
                            >VIEW PROJECT
                        </div>
                    </a>;
        }
        if (!project.widget) {
            display =   <div className="center">
                            <img  alt="project example"
                            className="itemMainImg"
                            src={ project.image }>
                            </img>
                        </div>
        } else {

                display = <Widget js={ project.widget.js } css={ project.widget.css }/>

        }

        return (
            <div className="portfolioItem">
                <h2>{ project.title }</h2>
                <p className="description">{ project.description }
                </p>
                    <div className="displayWrap">
                        { display }
                    </div>
                <h4>Tech Stack:</h4>
                <div className="techItem">
                    { project.techStack.map(( tech, i) =>
                    <span key={ i } > { tech } </span>
                    )}
                </div>
                <div className="buttonCont">
                    { button1 }
                    { button2 }
                </div>
            </div>
        )
    }
}

export default PortfolioItem