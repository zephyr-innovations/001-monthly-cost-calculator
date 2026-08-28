function Header({ currency, onCurrencyChange, theme, toggleTheme }) {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <span className="logo-mark">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="4 7 4 4 20 4 20 7" />
              <polyline points="6 10 8 16 12 10 16 16 18 10" />
              <line x1="4" y1="20" x2="20" y2="20" />
            </svg>
          </span>
          <span className="logo-text">ZEPHYR INNOVATION</span>
        </div>
      </div>

      <nav className="header-nav">
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#blog">Blog</a>
      </nav>

      <div className="header-controls">
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>

        <div className="currency-selector">
          <label htmlFor="currency-select" className="sr-only">Select currency</label>
          <select
            id="currency-select"
            className="currency-select"
            value={JSON.stringify(currency)}
            onChange={onCurrencyChange}
          >
            <option value='{"symbol":"$","code":"USD"}'>USD ($)</option>
            <option value='{"symbol":"€","code":"EUR"}'>EUR (€)</option>
            <option value='{"symbol":"£","code":"GBP"}'>GBP (£)</option>
            <option value='{"symbol":"₹","code":"INR"}'>INR (₹)</option>
            <option value='{"symbol":"$","code":"CAD"}'>CAD ($)</option>
            <option value='{"symbol":"$","code":"AUD"}'>AUD ($)</option>
          </select>
        </div>
      </div>

      <style jsx>{`
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0 0.75rem;
          border-bottom: 1px solid var(--border-subtle);
          gap: 1rem;
          flex-wrap: wrap;
        }

        .header-left {
          display: flex;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-primary);
          text-decoration: none;
        }

        .logo-mark {
          display: flex;
          align-items: center;
          opacity: 0.6;
        }

        .logo-text {
          font-size: 0.7rem;
          font-weight: 400;
          letter-spacing: 0.12em;
          color: var(--text-muted);
        }

        .header-nav {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .header-nav a {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-decoration: none;
          transition: color var(--transition);
          letter-spacing: 0.02em;
        }

        .header-nav a:hover {
          color: var(--text-primary);
        }

        .header-controls {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .theme-toggle {
          background: none;
          border: 1px solid var(--border-input);
          border-radius: var(--radius-sm);
          padding: 0.35rem 0.5rem;
          cursor: pointer;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color var(--transition), color var(--transition);
          min-width: 32px;
          min-height: 32px;
        }

        .theme-toggle:hover {
          border-color: var(--border-secondary);
          color: var(--text-primary);
        }

        .theme-toggle:active {
          transform: scale(0.95);
        }

        .currency-selector {
          display: flex;
          align-items: center;
        }

        .currency-select {
          background-color: var(--bg-input);
          border: 1px solid var(--border-input);
          border-radius: var(--radius-sm);
          padding: 0.35rem 2rem 0.35rem 0.65rem;
          font-size: 0.7rem;
          color: var(--text-primary);
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23666' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0.5rem center;
          min-height: 32px;
          transition: border-color var(--transition), background-color var(--transition);
        }

        .currency-select:focus {
          outline: none;
          border-color: var(--accent);
          background-color: var(--bg-tertiary);
        }

        .currency-select option {
          background-color: var(--bg-input);
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .header {
            padding: 0.75rem 0 0.6rem;
            gap: 0.5rem;
          }

          .logo-text {
            font-size: 0.6rem;
            letter-spacing: 0.1em;
          }

          .header-nav {
            gap: 1rem;
            order: 3;
            width: 100%;
            justify-content: center;
            padding-top: 0.5rem;
            border-top: 1px solid var(--border-subtle);
          }

          .header-nav a {
            font-size: 0.7rem;
          }

          .header-controls {
            gap: 0.5rem;
          }

          .currency-select {
            font-size: 0.65rem;
            padding: 0.3rem 1.8rem 0.3rem 0.6rem;
            min-height: 28px;
          }

          .theme-toggle {
            min-width: 28px;
            min-height: 28px;
            padding: 0.25rem 0.4rem;
          }
        }

        @media (max-width: 480px) {
          .header-nav {
            gap: 0.75rem;
          }

          .header-nav a {
            font-size: 0.65rem;
          }

          .logo-text {
            font-size: 0.55rem;
          }
        }
      `}</style>
    </header>
  )
}

export default Header