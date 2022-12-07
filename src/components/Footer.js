import React from 'react';

const Footer = () => {
    const date = new Date();

    return (
        <div className="footer">
            <small>Made in {date.getFullYear()} By Vishal Ratnakar</small>
            
        </div>
    );
};

export default Footer;