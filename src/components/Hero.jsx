import React from 'react';
import { Bot, ArrowRight, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="section animate-fade-in" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '120px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 20px', background: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.2)', borderRadius: '30px', color: 'var(--accent-cyan)', fontSize: '0.9rem', marginBottom: '32px', fontWeight: '500', backdropFilter: 'blur(10px)' }}>
            <Zap size={16} /> Especialista em Automação Inteligente (RPA)
          </div>
          
          <h1 className="section-title" style={{ fontSize: '4.5rem', marginBottom: '24px', letterSpacing: '-1px' }}>
            Automatize Processos e <br/><span className="text-gradient">Escale seu Negócio</span>
          </h1>
          
          <p className="section-subtitle delay-100" style={{ fontSize: '1.25rem' }}>
            Transformamos horas de trabalho manual em segundos. Desenvolvemos robôs personalizados que reduzem custos operacionais, eliminam erros e liberam sua equipe para focar no crescimento da empresa.
          </p>
          
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '40px' }} className="delay-200">
            <button className="btn-primary">
              Iniciar Projeto <ArrowRight size={18} />
            </button>
            <button className="btn-secondary">
              <Bot size={18} /> Conhecer Serviços
            </button>
          </div>
          
          <div style={{ marginTop: '100px', display: 'flex', justifyContent: 'center', gap: '60px', color: 'var(--text-secondary)' }} className="delay-300">
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>+50</h3>
              <p style={{ marginTop: '8px' }}>Processos Automatizados</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>99%</h3>
              <p style={{ marginTop: '8px' }}>Redução de Erros</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>24/7</h3>
              <p style={{ marginTop: '8px' }}>Operação Contínua</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
