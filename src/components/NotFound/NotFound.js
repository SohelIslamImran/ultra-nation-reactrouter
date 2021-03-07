import React from 'react';
import pageNotFound from '../../pageNotFound.jpg';

const NotFound = () => {
    return (
        <div style={{textAlign: "center", marginTop: "50px"}}>
            <img src={pageNotFound} alt=""/>
        </div>
    );
};

export default NotFound;