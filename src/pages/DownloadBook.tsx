import React, { useEffect } from 'react';

const DownloadBook: React.FC = () => {
    useEffect(() => {
        // Initialisation PayPal
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-white">
            {/* Section principale orange avec bordure noire fine et ombre intense */}
            <div 
                className="w-full max-w-2xl rounded-lg"
                style={{
                    backgroundColor: '#dd9957',
                    backgroundImage: 'linear-gradient(to bottom right, #dd9957, #f0c58a)',
                    border: '2px solid #000000', // Bordure noire fine (2px)
                    boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.6)', // Ombre très prononcée
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    transform: 'translateY(0)',
                    willChange: 'transform'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 35px 70px -15px rgba(0, 0, 0, 0.7)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 30px 60px -15px rgba(0, 0, 0, 0.6)';
                }}
            >
                {/* Contenu avec texte noir */}
                <div className="p-12 relative z-10 text-gray-900">
                    {/* Titre parfaitement centré */}
                    <div className="flex justify-center">
                        <h1 
                            className="text-5xl font-bold mb-6 text-center"
                            style={{ 
                                color: '#111',
                                textShadow: '1px 1px 2px rgba(255,255,255,0.3)'
                            }}
                        >
                            Buy My Book
                        </h1>
                    </div>
                    
                    <p 
                        className="mb-10 max-w-2xl mx-auto text-xl text-center animate-fade-in"
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
                        className="w-full max-w-md mx-auto rounded-md overflow-hidden scale-110"
                        style={{
                            minHeight: '55px',
                            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)' // Ombre également pour le bouton PayPal
                        }}
                    />
                    
                    <div 
                        className="mt-6 text-base text-center"
                        style={{ 
                            color: '#333'
                        }}
                    >
                        Payment processing by PayPal(actualisez la page si le bouton n'apparaît pas)
                    </div>
                </div>
            </div>

            {/* Style d'animation */}
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .paypal-button {
                    transform: scale(1.1);
                    min-height: 55px !important;
                    border: 1px solid #000 !important; // Bordure noire pour le bouton PayPal
                }
                
                .paypal-button-container {
                    min-height: 55px !important;
                }
            `}</style>
        </div>
    );
};

export default DownloadBook;