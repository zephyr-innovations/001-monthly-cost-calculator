import ExpenseForm from '../components/ExpenseForm'
import ExpenseList from '../components/ExpenseList'
import Summary from '../components/Summary'
import FeatureCards from '../components/FeatureCards'

function Home({ expenses, currency, onAddExpense, onDeleteExpense }) {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L12 7" />
            <path d="M12 17L12 22" />
            <path d="M4.93 4.93L8.4 8.4" />
            <path d="M15.6 15.6L19.07 19.07" />
            <path d="M2 12L7 12" />
            <path d="M17 12L22 12" />
            <path d="M4.93 19.07L8.4 15.6" />
            <path d="M15.6 8.4L19.07 4.93" />
            <circle cx="12" cy="12" r="2" />
          </svg>
        </div>
        <h1>How Much Is This Per Month?</h1>
        <p className="subtitle">Add recurring expenses and see what they really cost each month.</p>
      </section>

      {/* CALCULATOR SECTION */}
      <main className="app-main">
        <div className="calculator-container">
          <ExpenseForm 
            currency={currency}
            onAddExpense={onAddExpense}
          />

          <ExpenseList 
            expenses={expenses}
            currency={currency}
            onDelete={onDeleteExpense}
          />

          <Summary 
            expenses={expenses}
            currency={currency}
          />
        </div>

        {/* FEATURE CARDS */}
        <FeatureCards />
      </main>
    </>
  )
}

export default Home