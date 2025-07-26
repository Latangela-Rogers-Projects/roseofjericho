import React from 'react';

const Link = ({ to, children, ...props }) => {
    return (
        <a href={to} {...props}>
            {children}
        </a>
    );
};

export default Link;