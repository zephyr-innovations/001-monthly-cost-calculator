import { calculateMonthly } from '../utils/calculations'

function Summary({ expenses, currency }) {
  // Check if there are any expenses
  const hasExpenses = expenses && expenses.length > 0

  // Calculate totals
  let totalMonthly = 0
  let totalYearly = 0

  if (hasExpenses) {
    // Loop through each expense and calculate its monthly equivalent
    expenses.forEach((expense) => {
      const monthlyEquivalent = calculateMonthly(expense.amount, expense.frequency)
      totalMonthly += monthlyEquivalent
    })
    
    // Yearly total is monthly × 12
    totalYearly = totalMonthly * 12
  }

  return (
    <div className="summary">
      {!hasExpenses ? (
        <div className="empty-summary">
          <span style={{ display: 'block', fontSize: '1.5rem', marginBottom: '0.25rem', opacity: '0.25' }}>
            ❖
          </span>
          Add expenses to see your totals
        </div>
      ) : (
        <div className="summary-grid">
          {/* Monthly Total */}
          <div className="summary-item">
            <span className="summary-label">Monthly Total</span>
            <span className="summary-value">
              <span className="currency-symbol">{currency.symbol}</span>
              {totalMonthly.toFixed(2)}
            </span>
            <span className="summary-sub">per month</span>
          </div>

          {/* Yearly Total */}
          <div className="summary-item">
            <span className="summary-label">Yearly Total</span>
            <span className="summary-value">
              <span className="currency-symbol">{currency.symbol}</span>
              {totalYearly.toFixed(2)}
            </span>
            <span className="summary-sub">per year</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Summary