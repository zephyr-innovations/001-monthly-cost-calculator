import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import Summary from './components/Summary'
import FeatureCards from './components/FeatureCards'
import Footer from './components/Footer'

function App() {
  // State for theme (dark is default)
  const [theme, setTheme] = useState('dark')

  // State for global currency setting
  const [currency, setCurrency] = useState({
    symbol: '$',
    code: 'USD'
  })
  
  // State for expenses array
  const [expenses, setExpenses] = useState([])

  // Toggle theme handler
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  // Handle currency change
  const handleCurrencyChange = (e) => {
    const selectedCurrency = JSON.parse(e.target.value)
    setCurrency(selectedCurrency)
  }

  // Add expense handler
  const handleAddExpense = (expenseData) => {
    const newExpense = {
      id: Date.now(),
      name: expenseData.name.trim(),
      amount: expenseData.amount,
      frequency: expenseData.frequency
    }
    setExpenses([...expenses, newExpense])
  }

  // Delete expense handler
  const handleDeleteExpense = (id) => {
    const updatedExpenses = expenses.filter(expense => expense.id !== id)
    setExpenses(updatedExpenses)
  }

  return (
    <div className="app" data-theme={theme}>
      {/* HEADER */}
      <Header 
        currency={currency}
        onCurrencyChange={handleCurrencyChange}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* HERO SECTION */}
      <section className="hero">
               <h1>How Much Is This Per Month?</h1>
        <p className="subtitle">Add recurring expenses and see what they really cost each month.</p>
      </section>

      {/* CALCULATOR SECTION */}
      <main className="app-main">
        <div className="calculator-container">
          <ExpenseForm 
            currency={currency}
            onAddExpense={handleAddExpense}
          />

          <ExpenseList 
            expenses={expenses}
            currency={currency}
            onDelete={handleDeleteExpense}
          />

          <Summary 
            expenses={expenses}
            currency={currency}
          />
        </div>

        {/* FEATURE CARDS */}
        <FeatureCards />

        {/* FOOTER */}
        <Footer />
      </main>
    </div>
  )
}

export default App