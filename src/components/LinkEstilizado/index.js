import React from 'react';

const LinkEstilizado = React.forwardRef(({ onClick, href, children }, ref) => {
    return (
        <a href={href} onClick={onClick} ref={ref} style={{ color: '#B30000' }}>
            {children}
        </a>
    );
});

export default LinkEstilizado;