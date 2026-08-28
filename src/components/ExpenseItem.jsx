import { calculateMonthly } from '../utils/calculations'

function ExpenseItem({ expense, currency, onDelete }) {
  const { id, name, amount, frequency } = expense
  const monthlyEquivalent = calculateMonthly(amount, frequency)

  return (
    <div className="expense-item">
      <span className="expense-name">{name}</span>
      <span className="expense-amount">
        {currency.symbol}{Number(amount).toFixed(2)}
      </span>
      <span className="expense-frequency">{frequency}</span>
      <span className="expense-monthly">
        {currency.symbol}{monthlyEquivalent.toFixed(2)}
      </span>
      <button 
        className="btn-delete"
        onClick={() => onDelete(id)}
        aria-label={`Delete ${name}`}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <line x1="10" y1="11" x2="10" y2="17" />
          <line x1="14" y1="11" x2="14" y2="17" />
        </svg>
      </button>
    </div>
  )
}

export default ExpenseItem