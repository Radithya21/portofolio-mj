'use client';

import { useEffect, useState } from 'react';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
    const [count, setCount] = useState(1);

    useEffect(() => {
        if (count <= 100) {
            const timer = setTimeout(() => {
                setCount(count + 1);
            }, 20); // 2 seconds total (20ms x 100)
            return () => clearTimeout(timer);
        } else {
            setTimeout(() => {
                onComplete();
            }, 300);
        }
    }, [count, onComplete]);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'linear-gradient(180deg, #000000 0%, #1a0d2e 50%, #2d1b4e 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
                opacity: count > 100 ? 0 : 1,
                transition: 'opacity 0.3s ease-out',
            }}
        >
            <div
                style={{
                    position: 'relative',
                    textAlign: 'center',
                }}
            >
                {/* Glowing effect background */}
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '300px',
                        height: '300px',
                        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
                        filter: 'blur(40px)',
                        animation: 'pulse 2s ease-in-out infinite',
                    }}
                />
                
                {/* Counter number */}
                <div
                    style={{
                        position: 'relative',
                        fontSize: '120px',
                        fontWeight: 'bold',
                        background: 'linear-gradient(135deg, #8b5cf6 0%, #c084fc 50%, #a855f7 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontFamily: 'var(--font-geist-mono)',
                        letterSpacing: '-0.02em',
                        textShadow: '0 0 80px rgba(139, 92, 246, 0.5)',
                        animation: 'scaleIn 0.1s ease-out',
                    }}
                >
                    {count > 100 ? 100 : count}
                </div>

            </div>

            <style jsx>{`
                @keyframes pulse {
                    0%, 100% {
                        opacity: 0.3;
                        transform: translate(-50%, -50%) scale(1);
                    }
                    50% {
                        opacity: 0.5;
                        transform: translate(-50%, -50%) scale(1.1);
                    }
                }

                @keyframes scaleIn {
                    0% {
                        transform: scale(0.8);
                        opacity: 0.5;
                    }
                    100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
}
