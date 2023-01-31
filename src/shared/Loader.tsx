import React from 'react';

export const Loader = () => {
    return (
        <div className="grid place-content-center min-h-screen">
            <progress className="progress w-56"></progress>
        </div>
    );
};
