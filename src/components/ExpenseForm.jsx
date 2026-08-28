import { useState } from 'react'

function ExpenseForm({ currency, onAddExpense }) {
  // State for form fields
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [frequency, setFrequency] = useState('monthly')
  
  // State for validation errors
  const [nameError, setNameError] = useState('')
  const [amountError, setAmountError] = useState('')

  // Maximum allowed amount (1 trillion)
  const MAX_AMOUNT = 1000000000000

  // Validate name on change
  const handleNameChange = (e) => {
    const value = e.target.value
    setName(value)
    if (value.trim().length > 0) {
      setNameError('')
    }
  }

  // Validate amount on change
  const handleAmountChange = (e) => {
    const value = e.target.value
    setAmount(value)
    if (value && parseFloat(value) > 0) {
      setAmountError('')
    }
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    
    setNameError('')
    setAmountError('')
    
    let isValid = true
    
    const trimmedName = name.trim()
    if (!trimmedName) {
      setNameError('Please enter an expense name')
      isValid = false
    }
    
    const amountNumber = parseFloat(amount)
    
    if (isNaN(amountNumber) || !isFinite(amountNumber)) {
      setAmountError('Please enter a valid amount')
      isValid = false
    }
    else if (amountNumber <= 0) {
      setAmountError('Please enter an amount greater than 0')
      isValid = false
    }
    else if (amountNumber > MAX_AMOUNT) {
      setAmountError(`Amount is too large. Maximum is ${MAX_AMOUNT.toLocaleString()}`)
      isValid = false
    }
    else if (amount.includes('e') || amount.includes('E')) {
      setAmountError('Please enter a standard number (no scientific notation)')
      isValid = false
    }
    
    if (!isValid) {
      return
    }
    
    const expenseData = {
      name: trimmedName,
      amount: amountNumber,
      frequency: frequency
    }
    
    onAddExpense(expenseData)
    
    setName('')
    setAmount('')
    setFrequency('monthly')
    setNameError('')
    setAmountError('')
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit} noValidate>
      <h2 className="form-title">Add Expense</h2>
      
      <div className="form-row">
        {/* Expense Name */}
        <div className="form-group">
          <label htmlFor="expense-name">Name</label>
          <input
            id="expense-name"
            type="text"
            placeholder="e.g. Rent, Netflix, Gym"
            className={`expense-name-input ${nameError ? 'error' : ''}`}
            value={name}
            onChange={handleNameChange}
            aria-invalid={!!nameError}
            aria-describedby={nameError ? 'name-error' : undefined}
          />
          {nameError && (
            <span id="name-error" className="error-message">
              {nameError}
            </span>
          )}
        </div>

        {/* Amount */}
        <div className="form-group">
          <label htmlFor="expense-amount">Amount</label>
          <input
            id="expense-amount"
            type="number"
            placeholder="0.00"
            min="0.01"
            step="0.01"
            className={`expense-amount-input ${amountError ? 'error' : ''}`}
            value={amount}
            onChange={handleAmountChange}
            aria-invalid={!!amountError}
            aria-describedby={amountError ? 'amount-error' : undefined}
          />
          {amountError && (
            <span id="amount-error" className="error-message">
              {amountError}
            </span>
          )}
        </div>

        {/* Frequency */}
        <div className="form-group">
          <label htmlFor="expense-frequency">Frequency</label>
          <select
            id="expense-frequency"
            className="expense-frequency-select"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="bi-weekly">Bi-weekly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>

        {/* Add Button */}
        <div className="form-actions">
          <button type="submit" className="btn-add">
            Add Expense
          </button>
        </div>
      </div>
    </form>
  )
}

export default ExpenseForm