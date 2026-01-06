'use client';

import Image from 'next/image';

export default function Tools() {
    const tools = [
        {
            name: 'Canva',
            icon: '/canva.png'
        },
        {
            name: 'Adobe Lightroom',
            icon: '/adobe.png'
        },
        {
            name: 'Notion',
            icon: '/notion.png'
        },
        {
            name: 'Microsoft Word',
            icon: '/word.png'
        },
        {
            name: 'VOSviewer',
            icon: '/VosViewer.png'
        }
    ];

    return (
        <section
            id="tools"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(180deg, #000000 0%, #1a0d2e 60%, #2d1b4e 100%)',
                padding: '4rem 2rem',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Gradient Background */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />

            <div
                style={{
                    maxWidth: '1400px',
                    width: '100%',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {/* Section Title */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2
                        style={{
                            fontSize: 'clamp(2rem, 5vw, 3rem)',
                            fontWeight: 700,
                            marginBottom: '0.5rem',
                            background: 'linear-gradient(135deg, #9ca3af 0%, #6b7280 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            letterSpacing: '0.02em',
                        }}
                    >
                        Tools & Technologies
                    </h2>
                </div>

                {/* Tools Horizontal Row */}
                <div
                    style={{
                        display: 'flex',
                        gap: '2rem',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        padding: '0 1rem',
                    }}
                    className="tools-grid"
                >
                    {tools.map((tool, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                                borderRadius: '20px',
                                padding: '1.5rem',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'pointer',
                                backdropFilter: 'blur(10px)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '1rem',
                                minWidth: '140px',
                            }}
                            className="tool-card"
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(139, 92, 246, 0.3)';
                                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                            }}
                        >
                            {/* Icon */}
                            <div
                                style={{
                                    position: 'relative',
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                className="tool-icon"
                            >
                                <Image
                                    src={tool.icon}
                                    alt={tool.name}
                                    width={60}
                                    height={60}
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>

                            {/* Tool Name */}
                            <h3
                                style={{
                                    fontSize: '0.95rem',
                                    fontWeight: 600,
                                    color: '#ffffff',
                                    textAlign: 'center',
                                    margin: 0,
                                    lineHeight: 1.3,
                                }}
                                className="tool-name"
                            >
                                {tool.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 768px) {
                    .tools-grid {
                        display: grid !important;
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 1rem !important;
                        max-width: 400px;
                        margin: 0 auto;
                    }
                    
                    .tool-card {
                        min-width: auto !important;
                        padding: 1rem !important;
                        gap: 0.75rem !important;
                    }
                    
                    .tool-card:nth-child(5) {
                        grid-column: span 2;
                        max-width: 200px;
                        margin: 0 auto;
                    }
                    
                    .tool-icon {
                        width: 60px !important;
                        height: 60px !important;
                    }
                    
                    .tool-name {
                        font-size: 0.85rem !important;
                    }
                }
            `}</style>
        </section>
    );
}
