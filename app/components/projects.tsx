'use client';

import { useState, useEffect } from 'react';

interface WordPressPost {
    id: number;
    title: string;
    excerpt: string;
    URL: string;
    featured_image: string;
}

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('All');
    const [blogPosts, setBlogPosts] = useState<WordPressPost[]>([]);
    const [loadingPosts, setLoadingPosts] = useState(false);

    const filters = ['All', 'Latest projects', 'Artikel', 'Liputan', 'Blog web'];

    const projects = [
        // Latest projects / Artikel
        {
            id: 1,
            title: 'Sastrawi 1',
            description: 'An in-depth analysis of contemporary literature',
            category: 'Latest projects',
            secondaryCategory: 'Artikel',
            image: '/logo.png',
            pdfUrl: '/pdf/Sastrawi 1.pdf'
        },
        {
            id: 2,
            title: 'Sastrawi 2',
            description: 'Exploring narrative techniques in modern writing',
            category: 'Latest projects',
            secondaryCategory: 'Artikel',
            image: '/logo.png',
            pdfUrl: '/pdf/Sastrawi 2.pdf'
        },
        {
            id: 3,
            title: 'Investigasi',
            description: 'Uncovering stories that matter through investigative journalism',
            category: 'Latest projects',
            secondaryCategory: 'Artikel',
            image: '/logo.png',
            pdfUrl: '/pdf/Investigasi.pdf'
        },
        // Additional Artikel
        {
            id: 4,
            title: 'Pariwisata',
            description: 'Exploring tourism and travel stories',
            category: 'Artikel',
            image: '/logo.png',
            pdfUrl: '/pdf/Pariwisata.pdf'
        },
        {
            id: 5,
            title: 'Sport',
            description: 'Sports journalism and athletic coverage',
            category: 'Artikel',
            image: '/logo.png',
            pdfUrl: '/pdf/SPORT 1.pdf'
        },
        {
            id: 6,
            title: 'Spesialisasi 1',
            description: 'Specialized journalism coverage',
            category: 'Artikel',
            image: '/logo.png',
            pdfUrl: '/pdf/Spesialisasi 1.pdf'
        },
        {
            id: 7,
            title: 'Spesialisasi 2',
            description: 'Advanced specialized reporting',
            category: 'Artikel',
            image: '/logo.png',
            pdfUrl: '/pdf/Spesialisasi 2.pdf'
        },
        // Liputan
        {
            id: 8,
            title: 'Sport',
            description: 'Coverage of sports events and updates',
            category: 'Liputan',
            image: '/logo.png',
            youtubeUrl: 'https://youtu.be/kwmEt05cqz8'
        },
        {
            id: 9,
            title: 'Culture',
            description: 'Exploring cultural stories and traditions',
            category: 'Liputan',
            image: '/logo.png',
            youtubeUrl: 'https://youtu.be/5sfOcJ4yocg'
        },
        {
            id: 10,
            title: 'Renovasi',
            description: 'Coverage of renovation projects and developments',
            category: 'Liputan',
            image: '/logo.png',
            youtubeUrl: 'https://youtu.be/5sfOcJ4yocg'
        },
        {
            id: 11,
            title: 'News Anchor',
            description: 'Professional news anchoring performance',
            category: 'Liputan',
            image: '/logo.png',
            youtubeUrl: 'https://youtu.be/Q9K8Wzk4v58'
        }
    ];

    // Fetch WordPress posts when component mounts or filter changes to "Blog web"
    useEffect(() => {
        if (activeFilter === 'Blog web' || activeFilter === 'All') {
            setLoadingPosts(true);
            fetch('https://public-api.wordpress.com/rest/v1.1/sites/rasarempah.wordpress.com/posts/?number=6')
                .then(res => res.json())
                .then(data => {
                    setBlogPosts(data.posts || []);
                    setLoadingPosts(false);
                })
                .catch(error => {
                    console.error('Error fetching WordPress posts:', error);
                    setLoadingPosts(false);
                });
        }
    }, [activeFilter]);

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.category === activeFilter || p.secondaryCategory === activeFilter);

    // Determine what to show based on filter
    const showBlogPosts = activeFilter === 'Blog web';
    const showRegularProjects = activeFilter !== 'Blog web';

    return (
        <section
            id="projects"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(180deg, #2d1b4e 0%, #1a0d2e 20%, #000000 50%)',
                padding: '0 2rem 4rem 2rem',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Gradient Overlay */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at 30% 50%, rgba(139, 92, 246, 0.08) 0%, transparent 60%)',
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
                <div style={{ textAlign: 'left', marginBottom: '2.5rem' }}>
                    <h2
                        style={{
                            fontSize: 'clamp(2rem, 5vw, 3rem)',
                            fontWeight: 700,
                            marginBottom: '1.75rem',
                            color: '#ffffff',
                            letterSpacing: '0.02em',
                        }}
                    >
                        Projects
                    </h2>

                    {/* Filter Tabs */}
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '0.75rem',
                            marginBottom: '2rem',
                        }}
                    >
                        {filters.map((filter, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveFilter(filter)}
                                style={{
                                    padding: '1rem 1.75rem',
                                    borderRadius: '16px',
                                    border: activeFilter === filter 
                                        ? '1.5px solid rgba(139, 92, 246, 0.4)' 
                                        : '1px solid rgba(255, 255, 255, 0.1)',
                                    background: activeFilter === filter
                                        ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(168, 85, 247, 0.2) 100%)'
                                        : 'rgba(255, 255, 255, 0.05)',
                                    color: activeFilter === filter ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
                                    fontSize: '0.875rem',
                                    fontWeight: activeFilter === filter ? 600 : 500,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    backdropFilter: 'blur(10px)',
                                    boxShadow: activeFilter === filter 
                                        ? '0 4px 16px rgba(139, 92, 246, 0.2)' 
                                        : 'none',
                                }}
                                onMouseEnter={(e) => {
                                    if (activeFilter !== filter) {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (activeFilter !== filter) {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    }
                                }}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid - Regular Projects */}
                {showRegularProjects && (
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                            gap: '2rem',
                            padding: '0 1rem',
                        }}
                    >
                        {filteredProjects.map((project) => {
                            const CardWrapper = (project.pdfUrl || (project as any).youtubeUrl) ? 'a' : 'div';
                            const cardProps: any = {
                                style: {
                                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    cursor: 'pointer',
                                    backdropFilter: 'blur(10px)',
                                    textDecoration: 'none',
                                    display: 'block',
                                },
                                onMouseEnter: (e: any) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(139, 92, 246, 0.25)';
                                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.4)';
                                },
                                onMouseLeave: (e: any) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                },
                            };

                            if (project.pdfUrl) {
                                cardProps.href = project.pdfUrl;
                                cardProps.target = '_blank';
                                cardProps.rel = 'noopener noreferrer';
                            } else if ((project as any).youtubeUrl) {
                                cardProps.href = (project as any).youtubeUrl;
                                cardProps.target = '_blank';
                                cardProps.rel = 'noopener noreferrer';
                            }

                            return (
                                <CardWrapper key={project.id} {...cardProps}>
                                    {/* Project Image Placeholder */}
                                    <div
                                        style={{
                                            width: '100%',
                                            height: '200px',
                                            background: (project as any).youtubeUrl
                                                ? `url(https://img.youtube.com/vi/${(project as any).youtubeUrl.split('/').pop()}/hqdefault.jpg)`
                                                : project.image === '/logo.png'
                                                    ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(45, 27, 78, 0.5) 100%)'
                                                    : 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(45, 27, 78, 0.4) 100%)',
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            position: 'relative',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        {(project as any).youtubeUrl ? (
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    top: '50%',
                                                    left: '50%',
                                                    transform: 'translate(-50%, -50%)',
                                                    width: '50px',
                                                    height: '50px',
                                                    background: 'rgba(0, 0, 0, 0.6)',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    border: '2px solid rgba(255, 255, 255, 0.8)',
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        width: 0,
                                                        height: 0,
                                                        borderTop: '8px solid transparent',
                                                        borderBottom: '8px solid transparent',
                                                        borderLeft: '14px solid white',
                                                        marginLeft: '4px',
                                                    }}
                                                />
                                            </div>
                                        ) : (
                                            project.image === '/logo.png' ? (
                                                <div
                                                    style={{
                                                        position: 'absolute',
                                                        top: '50%',
                                                        left: '50%',
                                                        transform: 'translate(-50%, -50%)',
                                                        width: '80px',
                                                        height: '80px',
                                                        backgroundImage: 'url(/logo.png)',
                                                        backgroundSize: 'contain',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center',
                                                        opacity: 0.4,
                                                        borderRadius: '50%',
                                                    }}
                                                />
                                            ) : (
                                                <div
                                                    style={{
                                                        position: 'absolute',
                                                        top: '50%',
                                                        left: '50%',
                                                        transform: 'translate(-50%, -50%)',
                                                        fontSize: '3rem',
                                                        opacity: 0.3,
                                                    }}
                                                >
                                                    📄
                                                </div>
                                            )
                                        )}
                                    </div>

                                    {/* Project Info */}
                                    <div style={{ padding: '1.5rem' }}>
                                        <h3
                                            style={{
                                                fontSize: '1.5rem',
                                                fontWeight: 600,
                                                color: '#ffffff',
                                                marginBottom: '0.75rem',
                                            }}
                                        >
                                            {project.title}
                                        </h3>
                                        <p
                                            style={{
                                                fontSize: '0.95rem',
                                                color: 'rgba(255, 255, 255, 0.7)',
                                                lineHeight: 1.6,
                                            }}
                                        >
                                            {project.description}
                                        </p>
                                    </div>
                                </CardWrapper>
                            );
                        })}
                    </div>
                )}

                {/* Blog Posts Grid - WordPress Posts */}
                {showBlogPosts && (
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                            gap: '2rem',
                            padding: '0 1rem',
                        }}
                    >
                        {loadingPosts ? (
                            <div style={{
                                gridColumn: '1 / -1',
                                textAlign: 'center',
                                padding: '4rem',
                                color: 'rgba(255, 255, 255, 0.6)'
                            }}>
                                Loading blog posts...
                            </div>
                        ) : (
                            blogPosts.map((post) => (
                                <a
                                    key={post.id}
                                    href={post.URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
                                        borderRadius: '20px',
                                        overflow: 'hidden',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        cursor: 'pointer',
                                        backdropFilter: 'blur(10px)',
                                        textDecoration: 'none',
                                        display: 'block',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(139, 92, 246, 0.25)';
                                        e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.4)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    }}
                                >
                                    {/* Featured Image */}
                                    {post.featured_image && (
                                        <div
                                            style={{
                                                width: '100%',
                                                height: '200px',
                                                backgroundImage: `url(${post.featured_image})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                            }}
                                        />
                                    )}
                                    {!post.featured_image && (
                                        <div
                                            style={{
                                                width: '100%',
                                                height: '200px',
                                                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(45, 27, 78, 0.5) 100%)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                position: 'relative',
                                                overflow: 'hidden',
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '80px',
                                                    height: '80px',
                                                    backgroundImage: 'url(/logo.png)',
                                                    backgroundSize: 'contain',
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundPosition: 'center',
                                                    opacity: 0.4,
                                                    borderRadius: '50%',
                                                }}
                                            />
                                        </div>
                                    )}

                                    {/* Post Info */}
                                    <div style={{ padding: '1.5rem' }}>
                                        <h3
                                            style={{
                                                fontSize: '1.5rem',
                                                fontWeight: 600,
                                                color: '#ffffff',
                                                marginBottom: '0.75rem',
                                            }}
                                        >
                                            {post.title}
                                        </h3>
                                        <p
                                            style={{
                                                fontSize: '0.95rem',
                                                color: 'rgba(255, 255, 255, 0.7)',
                                                lineHeight: 1.6,
                                            }}
                                        >
                                            {post.excerpt.substring(0, 150) + '...'}
                                        </p>
                                    </div>
                                </a>
                            ))
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
