import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

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
    <BrowserRouter>
      <div className="app" data-theme={theme}>
        <Header 
          currency={currency}
          onCurrencyChange={handleCurrencyChange}
          theme={theme}
          toggleTheme={toggleTheme}
        />

        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                expenses={expenses}
                currency={currency}
                onAddExpense={handleAddExpense}
                onDeleteExpense={handleDeleteExpense}
              />
            } 
          />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App