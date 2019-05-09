import React from 'react';

class Navigation extends React.Component {
    render() {
        const navigationElements = ['PRODUCT','ABOUT','PORTFOLIO','TEAM','CONTACT'];
        return (
            <ul className="navigation"> 
                {navigationElements.map(text => (
                        <li>{text}</li>
                    )
                )}
            </ul>
        );
    }
}

export default Navigation;