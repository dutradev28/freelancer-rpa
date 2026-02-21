import React from 'react';
import { Database, FileSpreadsheet, Link, MessageSquare } from 'lucide-react';

const services = [
    {
        icon: <Database size={32} className="text-gradient" />,
        title: 'Extração de Dados',
        description: 'Robôs especializados em coleta de dados (Web Scraping) de portais, sistemas web e arquivos complexos com 100% de precisão.'
    },
    {
        icon: <FileSpreadsheet size={32} className="text-gradient" />,
        title: 'Automação de Relatórios',
        description: 'Fim do trabalho repetitivo no Excel. Geração automática de dashboards, cruzamento de dados e envios programados.'
    },
    {
        icon: <Link size={32} className="text-gradient" />,
        title: 'Integração de Sistemas',
        description: 'Conecte sistemas que não possuem API. Nossos robôs operam as interfaces garantindo o fluxo de informação entre os setores.'
    },
    {
        icon: <MessageSquare size={32} className="text-gradient" />,
        title: 'Bots para Atendimento',
        description: 'Triagem inteligente de e-mails, tickets e mensagens para agilizar o atendimento aos seus clientes sem intervenção humana.'
    }
];

const Services = () => {
    return (
        <section className="section" id="services">
            <div className="container">
                <h2 className="section-title">Nossas <span className="text-gradient">Soluções RPA</span></h2>
                <p className="section-subtitle">
                    Transformamos tarefas braçais e demoradas em processos automatizados, eficientes e à prova de falhas.
                </p>

                <div className="grid grid-cols-2" style={{ marginTop: '60px' }}>
                    {services.map((service, index) => (
                        <div key={index} className="glass-panel" style={{ padding: '40px', transition: 'transform 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ marginBottom: '20px', background: 'rgba(255, 255, 255, 0.05)', display: 'inline-flex', padding: '16px', borderRadius: '16px' }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
