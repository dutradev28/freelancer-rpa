import React from 'react';
import { Mail, MessageCircle, Calendar } from 'lucide-react';

const Contact = () => {
    return (
        <section className="section" id="contact" style={{ paddingTop: '60px', paddingBottom: '120px' }}>
            <div className="container">
                <div className="glass-panel" style={{ padding: '80px 40px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.8), rgba(139, 92, 246, 0.1))', position: 'relative', overflow: 'hidden' }}>

                    {/* Decorative background glow */}
                    <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', background: 'var(--accent-cyan)', opacity: '0.2', filter: 'blur(100px)', borderRadius: '50%', zIndex: 0 }}></div>

                    <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
                        <h2 className="section-title">Pronto para <span className="text-gradient">Escalar?</span></h2>
                        <p className="section-subtitle" style={{ marginBottom: '40px' }}>
                            Agende uma consultoria gratuita. Avaliaremos seus processos atuais e mostraremos exatamente onde a automação pode gerar mais lucro e economia de tempo.
                        </p>

                        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: 'none' }}>
                                <MessageCircle size={20} /> Falar no WhatsApp
                            </a>
                            <button className="btn-secondary">
                                <Calendar size={20} /> Agendar Reunião
                            </button>
                            <a href="mailto:contato@exemplo-rpa.com" className="btn-secondary" style={{ textDecoration: 'none' }}>
                                <Mail size={20} /> Enviar E-mail
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
