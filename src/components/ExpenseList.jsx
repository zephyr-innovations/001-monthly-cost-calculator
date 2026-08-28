import ExpenseItem from './ExpenseItem'

function ExpenseList({ expenses, currency, onDelete }) {
  const hasExpenses = expenses && expenses.length > 0

  return (
    <div className="expense-list">
      <div className="list-header">
        <span className="list-title">Your Expenses</span>
        <span className="expense-count">
          {hasExpenses ? `${expenses.length} item${expenses.length > 1 ? 's' : ''}` : 'No items'}
        </span>
      </div>

      {!hasExpenses ? (
        <div className="empty-state">
          <span className="empty-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          </span>
          No expenses yet
          <p style={{ fontSize: '0.8rem', color: 'var(--text-faint)', marginTop: '0.3rem' }}>
            Add your first expense above
          </p>
        </div>
      ) : (
        expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            currency={currency}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  )
}

export default ExpenseList