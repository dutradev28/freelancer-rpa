import React from 'react';
import { Bot, FileText, CheckCircle, Smartphone, Package } from 'lucide-react';

const projects = [
    {
        title: 'Integra ECAC',
        category: 'Extração & Dados',
        icon: <Bot size={28} className="text-gradient" />,
        description: 'Solução completa para extração de todos os dados do e-CAC da Receita Federal. O robô acessa o portal, navega pelos menus e consolida as informações fiscais e tributárias automaticamente.',
        metrics: ['Extração Completa', 'Bypass de Captcha', 'Dados Estruturados']
    },
    {
        title: 'Integra NFS-e',
        category: 'Automação Fiscal',
        icon: <FileText size={28} className="text-gradient" />,
        description: 'Automação para emissão de Nota Fiscal de Serviço (NFS-e) diretamente via Emissor Nacional. Elimina a digitação manual, conecta com seus sistemas e garante a conformidade fiscal.',
        metrics: ['Emissor Nacional', '100% Automatizado', 'Integração de Sistemas']
    },
    {
        title: 'Gerador de Guias DAS MEI',
        category: 'Contabilidade',
        icon: <CheckCircle size={28} className="text-gradient" />,
        description: 'Automação focada na disponibilização rápida e em lote de guias DAS para MEIs. Perfeito para escritórios contábeis que precisam escalar o atendimento sem aumentar a equipe.',
        metrics: ['Agilidade', 'Geração em Lote', 'Baixo Custo Operacional']
    },
    {
        title: 'CheckAuto Bot',
        category: 'Observabilidade',
        icon: <Smartphone size={28} className="text-gradient" />,
        description: 'Robô de monitoramento de saúde operacional. Ele vigia outras automações ou sistemas da sua empresa e alerta sua equipe via Telegram em caso de qualquer falha ou travamento.',
        metrics: ['Alertas no Telegram', 'Monitoramento 24/7', 'Prevenção de Falhas']
    }
];

const Projects = () => {
    return (
        <section className="section" id="products" style={{ position: 'relative' }}>
            {/* Background decoration */}
            <div style={{ position: 'absolute', top: '20%', right: '10%', width: '400px', height: '400px', background: 'var(--accent-purple)', opacity: '0.05', filter: 'blur(120px)', borderRadius: '50%', zIndex: 0 }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="section-title">Soluções <span className="text-gradient">Desenvolvidas</span></h2>
                <p className="section-subtitle">
                    Acabamos com o tempo de espera do desenvolvimento do zero. Conheça nossos robôs já validados, testados e prontos para plugar na sua operação hoje mesmo.
                </p>

                <div className="grid grid-cols-2" style={{ marginTop: '60px', gap: '30px' }}>
                    {projects.map((project, index) => (
                        <div key={index} className="glass-panel" style={{ padding: '40px', display: 'flex', flexDirection: 'column', height: '100%', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 40px rgba(139, 92, 246, 0.15)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)'; }}>

                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '24px' }}>
                                <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '12px', borderRadius: '12px', marginTop: '4px' }}>
                                    {project.icon}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '4px', fontWeight: '700', letterSpacing: '-0.5px' }}>{project.title}</h3>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <Package size={14} /> {project.category}
                                    </div>
                                </div>
                            </div>

                            <p style={{ color: 'var(--text-secondary)', flexGrow: 1, marginBottom: '24px', lineHeight: '1.7' }}>
                                {project.description}
                            </p>

                            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', borderTop: '1px solid var(--border-glass)', paddingTop: '20px' }}>
                                {project.metrics.map((metric, i) => (
                                    <span key={i} style={{ fontSize: '0.85rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <div style={{ width: '6px', height: '6px', background: 'var(--accent-blue)', borderRadius: '50%' }}></div>
                                        {metric}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
