import { useState } from 'react'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqData = [
    {
      question: "How is the monthly cost calculated?",
      answer: (
        <>
          <p>
            Each frequency has a <strong>multiplier</strong> that converts the expense 
            to a monthly equivalent. The calculator uses these exact multipliers:
          </p>
          <ul>
            <li><strong>Daily:</strong> 365.25 / 12 = 30.4375</li>
            <li><strong>Weekly:</strong> 52 / 12 = 4.333</li>
            <li><strong>Bi-weekly:</strong> 26 / 12 = 2.167</li>
            <li><strong>Monthly:</strong> 1</li>
            <li><strong>Quarterly:</strong> 1 / 3 = 0.333</li>
            <li><strong>Yearly:</strong> 1 / 12 = 0.0833</li>
          </ul>
          <p>
            The formula is: <code>monthly = amount × multiplier</code>
          </p>
        </>
      )
    },
    {
      question: "How is the yearly cost calculated?",
      answer: (
        <p>
          The yearly total is calculated by taking the <strong>total monthly cost</strong> 
          and multiplying it by 12.
          <br /><br />
          <code>yearly = total_monthly × 12</code>
        </p>
      )
    },
    {
      question: "Why does a weekly expense have a different monthly value?",
      answer: (
        <p>
          There are approximately <strong>4.333 weeks</strong> in an average month 
          (52 weeks ÷ 12 months). The calculator uses this to convert weekly expenses 
          into a monthly equivalent.
          <br /><br />
          For example, a $100 weekly expense becomes: 
          <code>$100 × (52/12) = $433.33</code> per month.
        </p>
      )
    },
    {
      question: "Does the calculator convert currencies?",
      answer: (
        <p>
          <strong>No.</strong> The currency selector only changes the <strong>display 
          symbol</strong> (e.g., $ to € or ₹). It does <strong>not</strong> perform 
          exchange-rate conversion.
          <br /><br />
          If you enter $100 and switch to EUR, the calculator will display €100 — 
          the amount is not converted.
        </p>
      )
    },
    {
      question: "Are my calculations stored?",
      answer: (
        <>
          <p>
            <strong>No.</strong> All calculations exist only in your browser's memory. 
            The calculator does not use:
          </p>
          <ul>
            <li>A backend server</li>
            <li>A database</li>
            <li>localStorage</li>
            <li>Cookies</li>
          </ul>
          <p>
            When you close or refresh the page, all data is cleared.
          </p>
        </>
      )
    },
    {
      question: "What happens when I refresh the page?",
      answer: (
        <p>
          <strong>All expenses are cleared from memory.</strong> The calculator 
          resets to its default state with no expenses and zero totals.
          <br /><br />
          This is because the calculator does not store any data persistently.
        </p>
      )
    },
    {
      question: "What frequencies are supported?",
      answer: (
        <>
          <p>
            The calculator supports <strong>six frequencies</strong>:
          </p>
          <ul>
            <li><strong>Daily</strong> — Every day</li>
            <li><strong>Weekly</strong> — Once per week</li>
            <li><strong>Bi-weekly</strong> — Every two weeks</li>
            <li><strong>Monthly</strong> — Once per month</li>
            <li><strong>Quarterly</strong> — Every three months</li>
            <li><strong>Yearly</strong> — Once per year</li>
          </ul>
        </>
      )
    },
    {
      question: "Can I use this calculator without an account?",
      answer: (
        <p>
          <strong>Yes.</strong> No account or sign-up is required. The calculator 
          is completely free to use and works entirely in your browser.
        </p>
      )
    }
  ]

  return (
    <div className="page faq-page">
      <h1 className="page-title">Frequently Asked Questions</h1>
      
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div 
            key={index} 
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
          >
            <button
              className="faq-question"
              onClick={() => toggleQuestion(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="faq-icon">
                {openIndex === index ? '−' : '+'}
              </span>
              {item.question}
            </button>
            <div 
              id={`faq-answer-${index}`}
              className="faq-answer"
              role="region"
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ