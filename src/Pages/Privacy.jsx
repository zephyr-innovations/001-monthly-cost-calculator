function Privacy() {
  return (
    <div className="page privacy-page">
      <h1 className="page-title">Privacy Policy</h1>
      
      <section className="page-section">
        <h2>Information we collect</h2>
        <p>
          <strong>We do not collect any personal information.</strong> This calculator 
          does not require you to provide your name, email address, or any other 
          identifying information.
        </p>
      </section>

      <section className="page-section">
        <h2>Data storage</h2>
        <p>
          All calculations performed in this calculator exist only in your browser's 
          memory. We do not store or transmit any data to a server, database, or 
          third-party service.
        </p>
        <ul>
          <li><strong>No backend server</strong> — The calculator runs entirely in your browser</li>
          <li><strong>No database</strong> — No data is saved or stored externally</li>
          <li><strong>No localStorage</strong> — Data is not persisted between sessions</li>
          <li><strong>No cookies</strong> — The application does not use cookies</li>
        </ul>
        <p>
          When you refresh or close the page, all expense data is cleared from memory.
        </p>
      </section>

      <section className="page-section">
        <h2>Third-party services</h2>
        <p>
          This calculator does not use any third-party services, analytics tools, 
          or external APIs. All code runs locally in your browser.
        </p>
      </section>

      <section className="page-section">
        <h2>Changes to this policy</h2>
        <p>
          This Privacy Policy may be updated if the application changes. Any changes 
          will be reflected on this page.
        </p>
        <p style={{ marginTop: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Last updated: August 2026
        </p>
      </section>
    </div>
  )
}

export default Privacy