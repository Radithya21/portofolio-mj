import { notFound } from 'next/navigation';

const projectsData = [
    {
        id: '1',
        title: 'Sastrawi 1',
        description: 'An in-depth analysis of contemporary literature',
        category: 'Artikel',
        fullDescription: 'This comprehensive article explores the depths of contemporary Indonesian literature, analyzing narrative techniques, thematic elements, and cultural contexts that shape modern storytelling.',
        date: 'January 2024'
    },
    {
        id: '2',
        title: 'Sastrawi 2',
        description: 'Exploring narrative techniques in modern writing',
        category: 'Artikel',
        fullDescription: 'A detailed examination of innovative narrative techniques employed by contemporary writers, focusing on how they reshape traditional storytelling methods and engage modern readers.',
        date: 'December 2023'
    },
    {
        id: '3',
        title: 'Investigative Report',
        description: 'Uncovering stories that matter',
        category: 'Artikel',
        fullDescription: 'An investigative journalism piece that delves deep into important social issues, presenting well-researched facts and compelling narratives that bring crucial stories to light.',
        date: 'November 2023'
    }
];

export default function ProjectDetail({ params }: { params: { id: string } }) {
    const project = projectsData.find(p => p.id === params.id);

    if (!project) {
        notFound();
    }

    return (
        <div
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(180deg, #000000 0%, #1a0d2e 50%, #2d1b4e 100%)',
                padding: '6rem 2rem 4rem',
            }}
        >
            <div
                style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    color: '#ffffff',
                }}
            >
                {/* Back Button */}
                <a
                    href="/#projects"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'rgba(255, 255, 255, 0.7)',
                        textDecoration: 'none',
                        marginBottom: '2rem',
                        fontSize: '0.95rem',
                        transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                    }}
                >
                    ← Back to Projects
                </a>

                {/* Project Header */}
                <div style={{ marginBottom: '3rem' }}>
                    <div
                        style={{
                            display: 'inline-block',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            background: 'rgba(139, 92, 246, 0.2)',
                            color: '#8b5cf6',
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            marginBottom: '1rem',
                        }}
                    >
                        {project.category}
                    </div>

                    <h1
                        style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            fontWeight: 700,
                            marginBottom: '1rem',
                            lineHeight: 1.2,
                        }}
                    >
                        {project.title}
                    </h1>

                    <p
                        style={{
                            fontSize: '1.1rem',
                            color: 'rgba(255, 255, 255, 0.6)',
                            marginBottom: '0.5rem',
                        }}
                    >
                        {project.date}
                    </p>
                </div>

                {/* Project Image */}
                <div
                    style={{
                        width: '100%',
                        height: '400px',
                        borderRadius: '20px',
                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(45, 27, 78, 0.5) 100%)',
                        marginBottom: '3rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                    }}
                >
                    <div style={{ fontSize: '5rem', opacity: 0.3 }}>📄</div>
                </div>

                {/* Project Content */}
                <div
                    style={{
                        fontSize: '1.125rem',
                        lineHeight: 1.8,
                        color: 'rgba(255, 255, 255, 0.8)',
                        marginBottom: '3rem',
                    }}
                >
                    <h2
                        style={{
                            fontSize: '1.75rem',
                            fontWeight: 600,
                            marginBottom: '1.5rem',
                            color: '#ffffff',
                        }}
                    >
                        About this Project
                    </h2>
                    <p>{project.fullDescription}</p>
                </div>

                {/* Additional Sections can be added here */}
            </div>
        </div>
    );
}
