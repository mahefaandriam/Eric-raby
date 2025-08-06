import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

declare global {
    interface Window {
        paypal?: any;
    }
}

const DownloadBook: React.FC = () => {
    const navigate = useNavigate();

       // Load PayPal SDK script
    useEffect(() => {
        // Check if PayPal script is already loaded
        if (document.getElementById('paypal-sdk')) return;

        const script = document.createElement('script');
        script.id = 'paypal-sdk';
        script.src = 'https://www.paypal.com/sdk/js?client-id=AU-uYDfRWow3Yko0t7PTQTLeGaxO-_IG-k9X6PFzNf8miDrMCM9AmPFLlJf5Oz2CGYmmpMO_yNG8YRjs&currency=USD';
        script.async = true;
        script.onload = () => {
            if (window.paypal && document.getElementById('paypal-button-container')) {
                window.paypal.Buttons().render('#paypal-button-container');
            }
        };
        document.body.appendChild(script);

        return () => {
            // Optional: remove script on unmount
            script.remove();
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-white">
            {/* Section principale */}
            <div 
                className="w-full max-w-sm rounded-lg"
                style={{
                    backgroundColor: '#dd9957',
                    backgroundImage: 'linear-gradient(to bottom right, #c2a25b, #f0c58a)',
                    border: '2px solid #000',
                    boxShadow: `
                        0 1px 0 rgba(255,255,255,0.2) inset,
                        0 15px 25px -5px rgba(0, 0, 0, 0.5),
                        0 4px 0 #000,
                        0 6px 0 rgba(0,0,0,0.2),
                        0 10px 15px rgba(0,0,0,0.3)
                    `,
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {/* Contenu */}
                <div className="p-6 relative z-10 text-gray-900">
                    {/* Logo */}
                    <div className="flex justify-center mb-4">
                        <img 
                            src="public/logo (2).png" 
                            alt="Book Logo"
                            className="h-32 w-auto"
                            style={{
                                filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.3))'
                            }}
                        />
                    </div>
                    
                    {/* Titre */}
                    <h1 className="text-3xl font-bold mb-3 text-center" style={{ color: '#111', textShadow: '1px 1px 2px rgba(255,255,255,0.3)' }}>
                        Buy My Book
                    </h1>
                    
                    <p className="mb-6 max-w-md mx-auto text-base text-center animate-fade-in" style={{ color: '#222', animation: 'fadeIn 1s ease-out' }}>
                        A powerful book about success, mindset, and motivation.
                        Instant PDF download after purchase.
                    </p>
                    
                    {/* Container PayPal */}
                    <div id="paypal-button-container" className="w-full max-w-xs mx-auto rounded-md overflow-hidden" />
                    
                    {/* Bouton de retour */}
                    <div className="mt-4 flex justify-center">
                        <button 
                            onClick={() => navigate(-1)}
                            className="px-6 py-2 rounded-md font-medium transition-all duration-200"
                            style={{
                                backgroundColor: '#ffffff',
                                backgroundImage: 'linear-gradient(to bottom, #ffffff, #e0e0e0)',
                                border: '2px solid #000',
                                boxShadow: '0 1px 0 rgba(255,255,255,0.5) inset, 0 3px 0 #000, 0 4px 4px rgba(0,0,0,0.2)',
                                color: '#111'
                            }}
                        >
                            ← Return to previous page
                        </button>
                    </div>
                    
                    <div className="mt-4 text-xs text-center" style={{ color: '#333' }}>
                        Payment processing by PayPal
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                button:hover {
                    filter: brightness(0.98);
                }
            `}</style>
        </div>
    );
};

export default DownloadBook;