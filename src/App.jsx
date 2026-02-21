import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      <Benefits />
      <Contact />

      <footer style={{ textAlign: 'center', padding: '40px 0', borderTop: '1px solid var(--border-glass)', color: 'var(--text-secondary)', marginTop: '40px' }}>
        <div className="container">
          <p>© {new Date().getFullYear()} Soluções em RPA automação. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
