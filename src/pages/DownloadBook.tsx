import React, { useEffect } from 'react';

const DownloadBook: React.FC = () => {
    useEffect(() => {
        // Initialisation PayPal
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-white">
            {/* Section principale réduite */}
            <div 
                className="w-full max-w-sm rounded-lg" // Changé de max-w-md à max-w-sm
                style={{
                    backgroundColor: '#dd9957',
                    backgroundImage: 'linear-gradient(to bottom right, #c2a25b, #f0c58a)',
                    border: '2px solid #000',
                    boxShadow: `
                        0 1px 0 rgba(255,255,255,0.2) inset,
                        0 15px 25px -5px rgba(0, 0, 0, 0.5), // Ombre réduite
                        0 4px 0 #000, // Bordure 3D réduite
                        0 6px 0 rgba(0,0,0,0.2),
                        0 10px 15px rgba(0,0,0,0.3)
                    `,
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {/* Contenu avec texte noir */}
                <div className="p-6 relative z-10 text-gray-900"> {/* Changé de p-8 à p-6 */}
                    {/* Logo container */}
                    <div className="flex justify-center mb-4"> {/* Réduit le margin-bottom */}
                        <img 
                            src="public/logo (2).png" 
                            alt="Book Logo"
                            className="h-32 w-auto" // Réduit la taille du logo
                            style={{
                                filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.3))'
                            }}
                        />
                    </div>
                    
                    {/* Titre parfaitement centré */}
                    <div className="flex justify-center">
                        <h1 
                            className="text-3xl font-bold mb-3 text-center" // Taille de texte réduite
                            style={{ 
                                color: '#111',
                                textShadow: '1px 1px 2px rgba(255,255,255,0.3)'
                            }}
                        >
                            Buy My Book
                        </h1>
                    </div>
                    
                    <p 
                        className="mb-6 max-w-md mx-auto text-base text-center animate-fade-in" // Taille de texte réduite
                        style={{ 
                            color: '#222',
                            animation: 'fadeIn 1s ease-out'
                        }}
                    >
                        A powerful book about success, mindset, and motivation.
                        Instant PDF download after purchase.
                    </p>
                    
                    {/* Container PayPal */}
                    <div 
                        id="paypal-button-container" 
                        className="w-full max-w-xs mx-auto rounded-md overflow-hidden"
                    />
                    
                    <div 
                        className="mt-3 text-xs text-center" // Taille de texte réduite
                        style={{ 
                            color: '#333'
                        }}
                    >
                        Payment processing by PayPal <br />(actual PayPal button will be rendered here).
                    </div>
                </div>
            </div>

            {/* Style d'animation */}
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default DownloadBook;