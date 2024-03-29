import React from 'react';
import './spiner.css';

const Spinner = () => {
    return (
        <div className="lds-css ng-scope">
            <div className="lds-disk">
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Spinner;
