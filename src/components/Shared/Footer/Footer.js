import React from 'react';

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear();
    return (
        <div className="w-100 bg-dark text-white text-center">
            <h3>Copyright &copy; {year} Darkfam || All right reserved </h3>
        </div>
    );
};

export default Footer;