import React from 'react';
import { TrendingUp, ShieldCheck, Clock, Layers } from 'lucide-react';

const benefits = [
    {
        icon: <Clock size={28} color="var(--accent-cyan)" />,
        title: 'Economia de Tempo',
        desc: 'Tarefas que levavam dias são concluídas em minutos, operando 24 horas por dia, 7 dias por semana.'
    },
    {
        icon: <ShieldCheck size={28} color="var(--accent-purple)" />,
        title: 'Zero Erros Manuais',
        desc: 'Elimine falhas humanas comuns em processos repetitivos. O robô faz exatamente o que é programado.'
    },
    {
        icon: <TrendingUp size={28} color="var(--accent-blue)" />,
        title: 'Retorno Rápido (ROI)',
        desc: 'O custo de desenvolvimento do robô é pago em poucos meses com a economia gerada em horas de trabalho.'
    },
    {
        icon: <Layers size={28} color="var(--accent-cyan)" />,
        title: 'Escalabilidade',
        desc: 'Seu volume de trabalho dobrou? O robô absorve a demanda sem necessidade de novas contratações.'
    }
];

const Benefits = () => {
    return (
        <section className="section" id="benefits" style={{ background: 'linear-gradient(to bottom, transparent, rgba(139, 92, 246, 0.03), transparent)' }}>
            <div className="container">
                <h2 className="section-title">Por que investir em <span className="text-gradient">Automação?</span></h2>

                <div className="grid grid-cols-2" style={{ marginTop: '80px', gap: '40px' }}>
                    <div className="glass-panel" style={{ padding: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '24px' }}>O Futuro do Trabalho é <span className="text-gradient">Eficiente</span></h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '1.1rem' }}>
                            Deixe que os robôs cuidem do trabalho robótico. Quando você automatiza processos burocráticos, sua equipe é valorizada e pode focar em estratégia, análise e atendimento focado no cliente.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {['Aumento de Produtividade', 'Padronização de Processos', 'Segurança da Informação'].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontWeight: '500' }}>
                                    <div style={{ width: '8px', height: '8px', background: 'var(--accent-cyan)', borderRadius: '50%' }}></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid" style={{ gridTemplateColumns: '1fr', gap: '20px' }}>
                        {benefits.map((benefit, index) => (
                            <div key={index} className="glass-panel" style={{ padding: '30px', display: 'flex', alignItems: 'flex-start', gap: '24px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '16px', borderRadius: '12px' }}>
                                    {benefit.icon}
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{benefit.title}</h4>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
