// src/components/LoadingSpinner.js
import React from 'react';
import { Spin } from 'antd';

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center h-screen">
           <Spin size="large" className="custom-spinner" />
        </div>
    );
};

export default LoadingSpinner;
