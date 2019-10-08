import React from 'react';
import './error-indicator.css';

const ErrorIndicator = ({ text = 'Error Indicator'}) => {
    return <div className='error'>
        { text }
    </div>;
};

export default ErrorIndicator;
