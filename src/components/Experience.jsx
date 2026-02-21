import React from 'react';
import { Briefcase, Code, Terminal, Server } from 'lucide-react';

const experiences = [
    {
        company: 'Tributo Justo Oficial',
        role: 'Desenvolvedor Python Pleno',
        period: 'Setembro 2025 – Atual',
        icon: <Terminal size={24} color="var(--accent-cyan)" />,
        description: 'Automação de processos fiscais e tributários. Desenvolvimento de RPAs em Python integrados ao portal interno. Arquitetura assíncrona com FastAPI, Celery e Redis. Infraestrutura em AWS S3, Terraform e Proxmox.',
        tags: ['Python', 'FastAPI', 'Celery', 'AWS S3', 'Terraform']
    },
    {
        company: 'OpenCON',
        role: 'Gerente de Desenvolvimento de Sistemas / Desenvolvedor Python',
        period: 'Novembro 2024 – Setembro 2025',
        icon: <Briefcase size={24} color="var(--accent-purple)" />,
        description: 'Gestão técnica de equipe e planejamento de recursos com metodologias ágeis (Scrum) e processos ITIL. Desenvolvimento RPA focado em Webscraping complexo usando FastAPI e Celery/Flower. Configuração de servidores VPS.',
        tags: ['Gestão de Equipe', 'Scrum', 'Scraping', 'FastAPI', 'VPS']
    },
    {
        company: 'Tahto',
        role: 'Analista de Desenvolvimento / Assistente de Operações de TI',
        period: 'Fevereiro 2023 – Novembro 2024',
        icon: <Server size={24} color="var(--accent-blue)" />,
        description: 'Automações em Python e C# usando DDD/Clean Architecture. Integração com Mainframe e APIs REST. Monitoramento de infraestrutura via Grafana, execução de deploys de automações de Nível 1 e gestão com Oracle SQL.',
        tags: ['C#', '.NET Core', 'Python', 'Oracle SQL', 'Grafana']
    }
];

const Experience = () => {
    return (
        <section className="section" id="experience" style={{ backgroundColor: 'rgba(17, 24, 39, 0.3)' }}>
            <div className="container">
                <h2 className="section-title">Minha <span className="text-gradient">Trajetória</span></h2>
                <p className="section-subtitle">
                    Sólida experiência em arquitetura de software, liderança técnica e automação de processos complexos.
                </p>

                <div style={{ maxWidth: '800px', margin: '60px auto 0' }}>
                    {experiences.map((exp, index) => (
                        <div key={index} style={{ display: 'flex', gap: '24px', marginBottom: '40px', position: 'relative' }}>

                            {/* Timeline line */}
                            {index !== experiences.length - 1 && (
                                <div style={{ position: 'absolute', left: '28px', top: '60px', bottom: '-40px', width: '2px', background: 'var(--border-glass)', zIndex: 0 }}></div>
                            )}

                            <div style={{ position: 'relative', zIndex: 1, width: '56px', height: '56px', borderRadius: '50%', background: 'var(--bg-card)', border: '1px solid var(--border-glass)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
                                {exp.icon}
                            </div>

                            <div className="glass-panel" style={{ padding: '30px', flexGrow: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '12px' }}>
                                    <div>
                                        <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>{exp.role}</h3>
                                        <div style={{ fontSize: '1.1rem', color: 'var(--accent-cyan)', fontWeight: '500' }}>{exp.company}</div>
                                    </div>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: '20px' }}>
                                        {exp.period}
                                    </span>
                                </div>

                                <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.6' }}>
                                    {exp.description}
                                </p>

                                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                    {exp.tags.map((tag, i) => (
                                        <span key={i} style={{ fontSize: '0.8rem', color: '#fff', background: 'rgba(139, 92, 246, 0.2)', border: '1px solid rgba(139, 92, 246, 0.3)', padding: '4px 10px', borderRadius: '12px' }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
