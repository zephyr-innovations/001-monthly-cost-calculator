function Terms() {
  return (
    <div className="page terms-page">
      <h1 className="page-title">Terms of Use</h1>
      
      <section className="page-section">
        <h2>Use of the calculator</h2>
        <p>
          This calculator is provided free of charge for personal use. You may use 
          it to estimate and track recurring expenses. Commercial use is permitted 
          as long as the tool is used as-is.
        </p>
      </section>

      <section className="page-section">
        <h2>Accuracy and estimates</h2>
        <p>
          All calculations are <strong>estimates</strong> based on the selected 
          frequency and the formulas described in the About page. Monthly totals 
          for weekly and daily expenses use an average month (30.4375 days).
        </p>
        <p>
          While we strive for accuracy, results should be considered approximate 
          and are not guaranteed to be error-free.
        </p>
      </section>

      <section className="page-section">
        <h2>Currency limitations</h2>
        <p>
          The currency selector only changes the <strong>display symbol</strong>. 
          This calculator does <strong>not</strong> perform exchange-rate conversion. 
          All amounts are treated as the same currency.
        </p>
      </section>

      <section className="page-section">
        <h2>No financial advice</h2>
        <p>
          The information provided by this calculator is for <strong>informational 
          purposes only</strong> and does not constitute financial advice. You should 
          consult with a qualified professional for financial decisions.
        </p>
      </section>

      <section className="page-section">
        <h2>Availability</h2>
        <p>
          The calculator is provided &quot;as is&quot; and &quot;as available&quot;. 
          We do not guarantee that the service will be uninterrupted, error-free, 
          or available at all times.
        </p>
      </section>

      <section className="page-section">
        <h2>Changes to the service</h2>
        <p>
          We reserve the right to update, modify, or discontinue the calculator at 
          any time without prior notice.
        </p>
      </section>

      <section className="page-section">
        <h2>Contact</h2>
        <p>
          For questions about these Terms of Use, please visit our Contact page.
        </p>
        <p style={{ marginTop: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Last updated: August 2026
        </p>
      </section>
    </div>
  )
}

export default Terms