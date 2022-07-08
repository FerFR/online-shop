import React from 'react';
import { Link as Href } from 'react-router-dom';

interface Props {
    to: string;
    children: any;
}

const Link = ({ to, children }: Props) => {
    return (
        <Href
            onClick={() => {
                window.scrollTo(0, 0);
            }}
            to={to}
        >
            {children}
        </Href>
    );
};

export default Link;
