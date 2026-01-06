'use client';

import Image from 'next/image';
import LiquidEther from './LiquidEther';

export default function About() {
    return (
        <section
            id="about"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#000000',
                padding: '4rem 2rem',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Liquid Ether Background */}
            <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, opacity: 0.3 }}>
                <LiquidEther
                    colors={['#5227FF', '#FF9FFC', '#B19EEF']}
                    mouseForce={20}
                    cursorSize={100}
                    isViscous={false}
                    viscous={30}
                    iterationsViscous={32}
                    iterationsPoisson={32}
                    resolution={0.5}
                    isBounce={false}
                    autoDemo={true}
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    takeoverDuration={0.25}
                    autoResumeDelay={3000}
                    autoRampDuration={0.6}
                />
            </div>
            <div
                style={{
                    maxWidth: '1200px',
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {/* Left side - Text content */}
                <div style={{ color: '#ffffff' }}>
                    <h2
                        style={{
                            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                            fontWeight: 300,
                            marginBottom: '0.5rem',
                            letterSpacing: '0.02em',
                        }}
                    >
                        Hello, I'm
                    </h2>
                    <h1
                        style={{
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            fontWeight: 700,
                            marginBottom: '1.5rem',
                            lineHeight: 1.2,
                            letterSpacing: '0.02em',
                        }}
                    >
                        Mutia Jummidayani Putri
                    </h1>
                    <p
                        style={{
                            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                            lineHeight: 1.8,
                            color: 'rgba(255, 255, 255, 0.8)',
                            maxWidth: '600px',
                            letterSpacing: '0.01em',
                            textAlign: 'justify',
                        }}
                    >
                        A communication studies student specializing in journalism, with a strong interest in public relations and strategic communication. Experienced in content writing and digital storytelling through managing a personal website, with a growing understanding of branding and public exposure. Skilled in communication, collaboration, and creative problem solving, with a strong willingness to learn beyond writing-focused roles.
                    </p>
                </div>

                {/* Right side - Profile photo */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: '400px',
                            aspectRatio: '1',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 60px rgba(138, 43, 226, 0.3)',
                        }}
                    >
                        <Image
                            src="/mj.JPG"
                            alt="Mutia Jummidayani Putri"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
