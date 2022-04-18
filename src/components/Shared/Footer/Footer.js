import React from 'react';

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear();
    return (
        <div className="w-100 bg-dark text-white text-center py-1">
            <p className="mt-2">Copyright &copy; {year} Darkfam || All right reserved </p>
        </div>
    );
};

export default Footer;