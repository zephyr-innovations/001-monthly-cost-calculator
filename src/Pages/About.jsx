function About() {
  return (
    <div className="page about-page">
      <h1 className="page-title">About this calculator</h1>
      
      <section className="page-section">
        <h2>What is this?</h2>
        <p>
          This tool converts recurring expenses into a common monthly and yearly view. 
          Whether you pay for a service daily, weekly, monthly, or annually, the calculator 
          helps you understand what each expense really costs over time.
        </p>
      </section>

      <section className="page-section">
        <h2>How it works</h2>
        <ol className="steps-list">
          <li>
            <strong>Enter an expense</strong> — Give it a name and enter the amount.
          </li>
          <li>
            <strong>Select how frequently it occurs</strong> — Daily, Weekly, Bi-weekly, 
            Monthly, Quarterly, or Yearly.
          </li>
          <li>
            <strong>The calculator converts it to a monthly equivalent</strong> — Each 
            frequency has a specific multiplier based on the average month.
          </li>
          <li>
            <strong>The calculator calculates the yearly equivalent</strong> — From the 
            total monthly cost, it multiplies by 12 to show the annual cost.
          </li>
        </ol>
      </section>

      <section className="page-section">
        <h2>How the calculations work</h2>
        <p>
          The calculator uses a <strong>multiplier</strong> for each frequency. The multiplier 
          represents how many times the expense occurs in a month.
        </p>
        
        <div className="formula-table">
          <div className="formula-row">
            <span className="formula-label">Monthly formula:</span>
            <span className="formula-code">monthly = amount × multiplier</span>
          </div>
          <div className="formula-row">
            <span className="formula-label">Yearly formula:</span>
            <span className="formula-code">yearly = total_monthly × 12</span>
          </div>
        </div>

        <h3>Supported frequencies and multipliers</h3>
        <ul className="frequency-list">
          <li>
            <strong>Daily</strong> — <code>365.25 / 12</code> = 30.4375 
            <span className="frequency-note">(accounts for leap years)</span>
          </li>
          <li>
            <strong>Weekly</strong> — <code>52 / 12</code> = 4.333
          </li>
          <li>
            <strong>Bi-weekly</strong> — <code>26 / 12</code> = 2.167
          </li>
          <li>
            <strong>Monthly</strong> — <code>1</code> 
            <span className="frequency-note">(no conversion needed)</span>
          </li>
          <li>
            <strong>Quarterly</strong> — <code>1 / 3</code> = 0.333
          </li>
          <li>
            <strong>Yearly</strong> — <code>1 / 12</code> = 0.0833
          </li>
        </ul>

        <div className="example-box">
          <h4>Example</h4>
          <p>
            If you enter <strong>$60</strong> with a <strong>weekly</strong> frequency:
          </p>
          <p className="example-calculation">
            $60 × (52 / 12) = $60 × 4.333 = <strong>$260.00</strong> per month
          </p>
          <p>
            The yearly total would be: <strong>$260.00 × 12 = $3,120.00</strong> per year
          </p>
        </div>
      </section>

      <section className="page-section">
        <h2>Supported frequencies</h2>
        <p>
          The calculator supports six frequency options:
        </p>
        <ul className="frequency-list">
          <li><strong>Daily</strong> — For expenses that occur every day</li>
          <li><strong>Weekly</strong> — For expenses that occur once per week</li>
          <li><strong>Bi-weekly</strong> — For expenses that occur every two weeks</li>
          <li><strong>Monthly</strong> — For standard monthly expenses</li>
          <li><strong>Quarterly</strong> — For expenses that occur every three months</li>
          <li><strong>Yearly</strong> — For annual expenses</li>
        </ul>
      </section>

      <section className="page-section">
        <h2>Currency handling</h2>
        <p>
          The selected currency <strong>only changes the display symbol</strong>. 
          This calculator does <strong>not</strong> perform exchange-rate conversion.
        </p>
        <p>
          For example, if you enter $100 and switch to EUR (€), the calculator 
          will display €100 — it does not convert the amount.
        </p>
      </section>

      <section className="page-section">
        <h2>Data and privacy</h2>
        <ul className="data-list">
          <li>
            <strong>No data is stored</strong> — All calculations exist only in your 
            browser's memory.
          </li>
          <li>
            <strong>No backend or database</strong> — The calculator runs entirely 
            in your browser.
          </li>
          <li>
            <strong>No account required</strong> — You can use the calculator without 
            signing up or creating an account.
          </li>
          <li>
            <strong>No cookies</strong> — The application does not use cookies.
          </li>
          <li>
            <strong>Data is cleared on refresh</strong> — When you refresh the page, 
            all expenses are cleared from memory.
          </li>
        </ul>
      </section>

      <section className="page-section">
        <h2>Limitations</h2>
        <ul className="limitations-list">
          <li>
            <strong>No currency conversion</strong> — The calculator only changes the 
            display symbol, not the actual value.
          </li>
          <li>
            <strong>No account system</strong> — Expenses cannot be saved or synced 
            across devices.
          </li>
          <li>
            <strong>No persistence</strong> — All data is lost when you refresh the page.
          </li>
          <li>
            <strong>Large-number protection</strong> — Individual expenses are limited 
            to <strong>1 trillion</strong>, and calculations are capped for safety.
          </li>
          <li>
            <strong>Estimates</strong> — Monthly totals for weekly and daily expenses 
            are estimates based on an average month (30.4375 days).
          </li>
        </ul>
      </section>
    </div>
  )
}

export default About