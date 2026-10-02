import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">🎓</span>
          <span>SmartStudy<span className="logo-ai"> AI</span></span>
        </div>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="#about">About</a>
        </div>

        <div className="nav-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Get Started</button>
        </div>
      </nav>


      {/* Hero */}
      <main className="hero">

        <div className="hero-content">

          <div className="badge">
            ✨ AI-powered learning for Class 10
          </div>

          <h1>
            Study smarter.
            <br />
            <span>Learn with AI.</span>
          </h1>

          <p className="hero-text">
            Your personal study companion for notes, textbooks,
            previous-year papers, quizzes and AI-powered doubt solving.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Start Learning →
            </button>

            <button className="secondary-btn">
              Explore Features
            </button>
          </div>

          <div className="trust-text">
            📚 Notes &nbsp; • &nbsp; 🤖 AI Tutor &nbsp; • &nbsp; 📊 Progress Tracking
          </div>

        </div>


        {/* AI Card */}
        <div className="ai-card-wrapper">

          <div className="glow"></div>

          <div className="ai-card">

            <div className="ai-card-header">
              <div className="ai-avatar">🤖</div>

              <div>
                <strong>SmartStudy AI</strong>
                <small>Your AI Study Assistant</small>
              </div>

              <div className="online-dot"></div>
            </div>

            <div className="question">
              <span>You</span>
              <p>Explain Ohm's Law in simple language.</p>
            </div>

            <div className="answer">
              <span>AI Assistant</span>

              <p>
                Ohm's Law explains the relationship between
                voltage, current and resistance.
              </p>

              <div className="formula">
                V = I × R
              </div>
            </div>

            <div className="sources">
              <span>📖 Textbook — Page 142</span>
              <span>📝 Notes — Electricity</span>
              <span>📄 PYQ — 2025</span>
            </div>

          </div>

        </div>

      </main>


      {/* Features */}
      <section className="features" id="features">

        <div className="section-heading">
          <p>EVERYTHING YOU NEED TO LEARN BETTER</p>
          <h2>One platform. Smarter studying.</h2>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Study Material</h3>
            <p>
              Access notes, textbooks and previous-year
              question papers organized by subject and chapter.
            </p>
          </div>

          <div className="feature-card featured">
            <div className="feature-icon">🤖</div>
            <h3>Ask AI</h3>
            <p>
              Ask any doubt and get a simple explanation
              based on your study material.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Track Weak Topics</h3>
            <p>
              Take quizzes and discover which chapters
              need more revision.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔎</div>
            <h3>Find the Page</h3>
            <p>
              AI answers can point you to the relevant
              textbook page, notes and PYQs.
            </p>
          </div>

        </div>

      </section>


      {/* How it works */}
      <section className="how-section" id="how-it-works">

        <div className="section-heading">
          <p>HOW IT WORKS</p>
          <h2>From doubt to understanding.</h2>
        </div>

        <div className="steps">

          <div className="step">
            <div>01</div>
            <h3>Ask a doubt</h3>
            <p>Type your question in simple language.</p>
          </div>

          <div className="step">
            <div>02</div>
            <h3>AI finds the answer</h3>
            <p>SmartStudy searches your learning material.</p>
          </div>

          <div className="step">
            <div>03</div>
            <h3>Learn & practice</h3>
            <p>Read, revise and test your understanding.</p>
          </div>

        </div>

      </section>


      {/* Footer */}
      <footer>
        <div className="logo">
          🎓 SmartStudy<span className="logo-ai"> AI</span>
        </div>

        <p>
          Making Class 10 learning smarter with AI.
        </p>

        <small>© 2026 SmartStudy AI</small>
      </footer>

    </div>
  );
}

export default App;