function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-brand">
          Developed with <span className="heart">♥</span> by Zephyr Innovation
        </p>
        
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <span className="separator">|</span>
          <a href="#terms">Terms of Use</a>
          <span className="separator">|</span>
          <a href="#about">About</a>
          <span className="separator">|</span>
          <a href="#contact">Contact</a>
          <span className="separator">|</span>
          <a href="#blog">Blog</a>
        </div>
        
        <p className="footer-copyright">
          © 2026 Zephyr Innovation. All rights reserved.
        </p>
      </div>

      <style jsx>{`
        .footer {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-subtle);
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.6rem;
          text-align: center;
        }

        .footer-brand {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 300;
        }

        .footer-brand .heart {
          color: var(--text-dim);
        }

        .footer-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.25rem 0.75rem;
          font-size: 0.7rem;
        }

        .footer-links a {
          color: var(--text-dim);
          text-decoration: none;
          transition: color var(--transition);
        }

        .footer-links a:hover {
          color: var(--text-primary);
        }

        .footer-links .separator {
          color: var(--border-secondary);
          font-size: 0.6rem;
        }

        .footer-copyright {
          font-size: 0.6rem;
          color: var(--text-faint);
          font-weight: 300;
        }

        @media (max-width: 768px) {
          .footer {
            margin-top: 1rem;
            padding-top: 1rem;
          }

          .footer-links {
            gap: 0.15rem 0.5rem;
            font-size: 0.65rem;
          }

          .footer-brand {
            font-size: 0.7rem;
          }

          .footer-copyright {
            font-size: 0.55rem;
          }
        }

        @media (max-width: 480px) {
          .footer-links {
            gap: 0.1rem 0.4rem;
            font-size: 0.6rem;
          }
          
          .footer-links .separator {
            font-size: 0.5rem;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer