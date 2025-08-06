import React from 'react';

const DownloadBook: React.FC = () => {

    return (
         <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center p-8">
            <h1 className="text-4xl font-bold mb-4">Buy My Book</h1>
            <p className="mb-6 text-gray-700 max-w-xl">
                A powerful book about success, mindset, and motivation.
                Instant PDF download after purchase.
            </p>
            <div id="paypal-button-container"></div>
            
        </div>
    );
};

export default DownloadBook;