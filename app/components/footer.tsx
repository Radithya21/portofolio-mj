'use client';

export default function Footer() {
    return (
        <footer
            id="contact"
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
            <div
                style={{
                    maxWidth: '800px',
                    width: '100%',
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {/* Main Title */}
                <h2
                    style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                        fontWeight: 700,
                        color: '#ffffff',
                        marginBottom: '1.5rem',
                        letterSpacing: '0.02em',
                    }}
                >
                    Let&apos;s Connect
                </h2>

                {/* Subtitle */}
                <p
                    style={{
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                        color: 'rgba(255, 255, 255, 0.6)',
                        marginBottom: '3rem',
                        lineHeight: 1.6,
                        maxWidth: '600px',
                        margin: '0 auto 3rem',
                    }}
                >
                    Interested in collaborating or learning more about my work? Reach out through any of these channels.
                </p>

                {/* Contact Links */}
                <div
                    className="footer-links"
                    style={{
                        display: 'flex',
                        gap: '3rem',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        marginBottom: '4rem',
                    }}
                >
                    {/* Email */}
                    <a
                        href="mailto:mutiajummidayaniputri@gmail.com"
                        className="footer-link"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: 'rgba(255, 255, 255, 0.8)',
                            fontSize: '1.1rem',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#ffffff';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <svg className="footer-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="5" width="18" height="14" rx="2" />
                            <path d="M3 7l9 6 9-6" />
                        </svg>
                        Email
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/mutiaj2275/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: 'rgba(255, 255, 255, 0.8)',
                            fontSize: '1.1rem',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#ffffff';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <svg className="footer-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                    </a>

                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/jummi.ya_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: 'rgba(255, 255, 255, 0.8)',
                            fontSize: '1.1rem',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#ffffff';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <svg className="footer-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                        Instagram
                    </a>
                </div>

                <style jsx>{`
                    @media (max-width: 768px) {
                        .footer-links {
                            gap: 1rem !important;
                            flex-wrap: nowrap !important;
                        }
                        .footer-link {
                            font-size: 0.8rem !important;
                            gap: 0.3rem !important;
                        }
                        .footer-icon {
                            width: 16px !important;
                            height: 16px !important;
                        }
                        .copyright-text {
                            font-size: 0.75rem !important;
                            width: 100%;
                            bottom: 1.5rem !important;
                        }
                    }
                `}</style>
            </div>

            {/* Copyright - Outside container, positioned at bottom */}
            <p
                className="copyright-text"
                style={{
                    fontSize: '0.95rem',
                    color: 'rgba(255, 255, 255, 0.4)',
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    margin: 0,
                    zIndex: 1,
                    textAlign: 'center',
                    width: 'max-content',
                }}
            >
                © 2026 Mutia Jummidayani Putri
            </p>
        </footer>
    );
}
