function FeatureCards() {
  const cards = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
      title: "Simple & Accurate",
      description: "Convert recurring expenses into clear monthly and yearly costs."
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      title: "Private by Design",
      description: "Your calculations happen in your browser. No account is required."
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: "Works Without an Account",
      description: "Use the calculator instantly, without signing up."
    }
  ]

  return (
    <div className="feature-cards">
      {cards.map((card, index) => (
        <div key={index} className="feature-card">
          <div className="card-icon">{card.icon}</div>
          <div className="card-title">{card.title}</div>
          <div className="card-description">{card.description}</div>
        </div>
      ))}
    </div>
  )
}

export default FeatureCards