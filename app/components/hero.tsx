'use client';

import Aurora from './Aurora';
import CardNav from './CardNav';

export default function Home() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navItems = [
        {
            label: "About",
            bgColor: "#1a0d2e",
            textColor: "#fff",
            links: [
                {
                    label: "About",
                    ariaLabel: "Navigate to About section",
                    href: "#about",
                    onClick: () => scrollToSection('about')
                },
            ]
        },
        {
            label: "Projects",
            bgColor: "#2d1b4e",
            textColor: "#fff",
            links: [
                {
                    label: "Projects",
                    ariaLabel: "Navigate to Projects section",
                    href: "#projects",
                    onClick: () => scrollToSection('projects')
                },
            ]
        },
        {
            label: "Contact",
            bgColor: "#3d2b5e",
            textColor: "#fff",
            links: [
                {
                    label: "Contact",
                    ariaLabel: "Navigate to Contact section",
                    href: "#contact",
                    onClick: () => scrollToSection('contact')
                },
            ]
        }
    ];

    return (
        <section
            id="home"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'black',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Aurora Background */}
            <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, opacity: 0.9 }}>
                <Aurora
                    colorStops={['#8b5cf6', '#001f3f', '#8b5cf6']}
                    amplitude={1.5}
                    blend={0.6}
                />
            </div>

            {/* Gradient overlay */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at 20% 50%, rgba(138, 43, 226, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0, 128, 128, 0.15) 0%, transparent 50%)',
                    pointerEvents: 'none',
                }}
            />

            {/* CardNav */}
            <CardNav
                items={navItems}
                baseColor="rgba(0, 0, 0, 0.8)"
                ease="power3.out"
            />

            <div
                style={{
                    textAlign: 'center',
                    zIndex: 1,
                    position: 'relative',
                    padding: 'clamp(1rem, 4vw, 2rem)',
                    maxWidth: '100%',
                }}
            >
                <h1
                    style={{
                        fontSize: 'clamp(2.5rem, 10vw, 8rem)',
                        fontWeight: 700,
                        letterSpacing: 'clamp(0.05em, 0.5vw, 0.15em)',
                        margin: 0,
                        background: 'linear-gradient(135deg, #9ca3af 0%, #6b7280 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        textTransform: 'uppercase',
                        marginBottom: 'clamp(0.5rem, 2vw, 1rem)',
                        lineHeight: 1.1,
                    }}
                >
                    PORTFOLIO
                </h1>

                <p
                    style={{
                        fontSize: 'clamp(1rem, 2.5vw, 2rem)',
                        color: '#ffffff',
                        margin: '0',
                        fontWeight: 300,
                        letterSpacing: 'clamp(0.02em, 0.3vw, 0.05em)',
                    }}
                >
                    Mj on communication
                </p>
            </div>
        </section>
    );
}
