import React from 'react';
import loading from '../assets/loading.gif';

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-96">
            <img src={loading} alt="Loading"/>
        </div>
    );
};

export default Loading;