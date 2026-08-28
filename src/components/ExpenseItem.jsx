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
        ×
      </button>
    </div>
  )
}

export default ExpenseItem