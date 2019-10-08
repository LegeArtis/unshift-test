import React from 'react';
import './app-header.css';
import { Link } from "react-router-dom";

const AppHeader = () => {
    return (
        <div className='app_header'>
            <Link to={`/`}>
                <h1 className='app_link'>All blog </h1>
            </Link>
            <Link to={`/add-blog`}>
                <h1 className='app_link'>Add blog </h1>
            </Link>
        </div>
    );
};

export default AppHeader;
