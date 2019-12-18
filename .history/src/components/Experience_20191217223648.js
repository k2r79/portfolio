import React from 'react';
import './Experience.scss';

export default class Experience extends React.Component {

    static Date = {
        typeName: "date",

        render({ date }) {
            return (<div className="date-container">{ date }</div>);
        }
    }

    static Project = ({ project }) => {
        return (<h1>{ project }</h1>);
    };

    render() {     
        return (
            <div id="experience">
                <ul id="timeline">
                    <li>
                        {
                            React.Children.map(this.props.children, child => {
                                console.log(child);
                                if (child.type.typeName === "date") {
                                    return React.cloneElement(child, { date: child.props.children });
                                }
                            })
                        }
                        <div className="details">
                            {
                                React.Children.map(this.props.children, child => {
                                    if (child.type.typeName === "date") {
                                        return;
                                    }

                                    return React.cloneElement(child, { date: child.props.children });
                                })
                            }
                            <h1></h1><h3>- Référent Technique</h3>
                            <p className="info">
                                Application de gestion des dossiers d'appel de dépannage des clients d'<strong>Enedis</strong>.<br/>
                                Disponibilité 24/7 avec des nombreuses intéractions avec des partenaires.<br/>
                                Accompagnement d'une équipe de 5 développeurs.
                            </p>
                            <span className="label">Technologies</span><ul>
                                <li>Java 8</li>
                                <li>Spring Boot</li>
                                <li>Angular 5</li>
                                <li>Cassandra</li>
                                <li>Jenkins</li>
                                <li>Ansible</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }    
}