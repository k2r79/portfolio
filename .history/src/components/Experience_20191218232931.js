import React from 'react';
import './Experience.scss';

class ExperienceDate extends React.Component {

    render() {
        return (<div>{ this.props.value }</div>);
    }
}

class ExperienceCompany extends React.Component {

    render() {
        return (<>{ this.props.value }</>);
    }
}

class ExperienceTimeline extends React.Component {

    static Date = ExperienceDate;
    static Company = ExperienceCompany;

    render() {
        return (
            <div className="left-container">
                {
                    React.Children.map(this.props.children, child => {
                        return React.cloneElement(child, { value: child.props.children });
                    })
                }
            </div>
        );
    }
}

class ExperienceProject extends React.Component {

    render() {
        return (<h1>{ this.props.value }</h1>);
    }
}

class ExperiencePosition extends React.Component {

    render() {
        return (<h3>- { this.props.value }</h3>);
    }
}

class ExperienceDescription extends React.Component {

    render() {
        return (<p>{ this.props.value }</p>);
    }
}

class ExperienceStack extends React.Component {

    render() {
        let technologies = this.props.items
            .map(technology => React.cloneElement(technology, { 
                key: technology.props.children,
                value: technology.props.children 
            }));

        return (
            <>
                <span>Technologies :</span>
                <ul>
                    { technologies }
                </ul>
            </>
        );
    }
}

class ExperienceTechnology extends React.Component {

    render() {
        return (<li key={ this.props.key }>{ this.props.value }</li>);
    }
}

export default class Experience extends React.Component {

    static Timeline = ExperienceTimeline;
    static Project = ExperienceProject;
    static Position = ExperiencePosition;
    static Description = ExperienceDescription;
    static Stack = ExperienceStack;
    static Technology = ExperienceTechnology;

    render() {     
        return (
            <div className="timeline">
                {
                    React.Children.map(this.props.children, child => {
                        if (child.type === ExperienceTimeline) {
                            return React.cloneElement(child, { children: child.props.children });
                        }
                    })
                }
                <div className="details">
                    {
                        React.Children.map(this.props.children, child => {
                            if (child.type === ExperienceTimeline) {
                                return;
                            }

                            if (child.type === ExperienceStack) {
                                return React.cloneElement(child, { items: child.props.children });
                            }

                            return React.cloneElement(child, { value: child.props.children });
                        })
                    }
                </div>
            </div>
        );
    }    
}