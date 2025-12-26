import NewsletterForm from "./components/NewsletterForm.jsx";
import FAQ from "./components/FAQ.jsx";

export default function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>End the HOA Drama. Start Transparency.</h1>
          <p className="subheadline">
            ProperHOA is a digital portal for self-managed HOAs that replaces paper chaos,
            hidden finances, and election disputes — with instant transparency for every homeowner.
          </p>
          <NewsletterForm />
        </div>
      </section>

      {/* Target Audience */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Built for 350,000+ Self-Managed HOAs in the USA</h2>
          <p className="section-subtitle">
            If your board still uses Excel spreadsheets, paper ballots, handwritten violation letters,
            and unverified resident lists... ProperHOA replaces all of that.
          </p>
          
          <ul className="benefits-list">
            <li className="benefit-item">Boards drowning in spreadsheets</li>
            <li className="benefit-item">Paper ballots & handwritten notices</li>
            <li className="benefit-item">Confusing budgets & unclear spending</li>
            <li className="benefit-item">Election disputes & lack of trust</li>
            <li className="benefit-item">Limited access to financial records</li>
            <li className="benefit-item">No audit trail for legal protection</li>
          </ul>
        </div>
      </section>

      {/* How It Works */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">How ProperHOA Works</h2>
          <p className="section-subtitle">
            A complete platform that transforms your HOA management
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">💼</span>
              <h3>For the Board</h3>
              <p><strong>Financial Command Center</strong></p>
              <ul>
                <li>Convert bank CSVs into pie charts in seconds</li>
                <li>Automatic audit trails for legal protection</li>
                <li>Centralized document management</li>
                <li>Instant financial reporting</li>
              </ul>
            </div>

            <div className="feature-card">
              <span className="feature-icon">📱</span>
              <h3>For Homeowners</h3>
              <p><strong>Mobile Voting Booth</strong></p>
              <ul>
                <li>Secure voting for elections & rule changes</li>
                <li>Instant access to budgets & meeting minutes</li>
                <li>Maintenance update notifications</li>
                <li>Complete transaction history</li>
              </ul>
            </div>

            <div className="feature-card">
              <span className="feature-icon">🏘️</span>
              <h3>For the Community</h3>
              <p><strong>Total Transparency</strong></p>
              <ul>
                <li>Automatic residency verification</li>
                <li>Zero secrets. Zero drama. 100% accountability</li>
                <li>Only legal homeowners can vote</li>
                <li>Equal access to information for everyone</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="section section-blue">
        <div className="container">
          <h2 className="section-title">Why It Works</h2>
          <p className="section-subtitle">
            HOAs fail when information is controlled by a few.
            ProperHOA makes every decision visible.
          </p>
          
          <div className="stats-container">
            <div className="stat-card">
              <span className="stat-number">82%</span>
              <span className="stat-label">of HOA disputes come from unclear communication</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">350K+</span>
              <span className="stat-label">Self-managed HOAs in the USA</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">100%</span>
              <span className="stat-label">Financial transparency</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about ProperHOA
          </p>
          <FAQ />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section section-blue">
        <div className="container">
          <h2 className="section-title">Be the First to Try ProperHOA</h2>
          <p className="section-subtitle">
            This is the future of HOA management — without enterprise complexity.
          </p>
          <p className="section-subtitle" style={{ marginTop: 0 }}>
            Join the early access list below and get:<br/>
            🎁 1 month free<br/>
            🚀 Early access features<br/>
            👥 Priority support
          </p>
          <NewsletterForm variant="hero" />
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        background: 'var(--blue-900)', 
        color: 'var(--white)', 
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <div className="container">
          <p style={{ marginBottom: '8px', fontSize: '1.25rem', fontWeight: '600' }}>
            ProperHOA
          </p>
          <p style={{ color: 'var(--blue-200)', fontSize: '0.875rem' }}>
            © 2025 ProperHOA. All rights reserved.<br/>
            End the HOA Drama. Start Transparency.
          </p>
        </div>
      </footer>
    </div>
  );
}

