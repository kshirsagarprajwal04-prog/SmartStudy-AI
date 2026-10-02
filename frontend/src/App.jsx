import {
  ArrowRight,
  BookOpen,
  Brain,
  GraduationCap,
  MessageCircleQuestion,
  BarChart3,
  FileText,
  Sparkles,
} from "lucide-react";

import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <GraduationCap size={30} />
          <span>SmartStudy <b>AI</b></span>
        </div>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="#about">About</a>
        </div>

        <div className="nav-buttons">
          <button className="login-btn">Login</button>
          <button className="primary-btn">Get Started</button>
        </div>
      </nav>


      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">

          <div className="badge">
            <Sparkles size={16} />
            AI-powered learning for Class 10
          </div>

          <h1>
            Study smarter.
            <br />
            <span>Learn with AI.</span>
          </h1>

          <p>
            Your personal study companion for notes, textbooks,
            previous-year papers, quizzes and AI-powered doubt solving.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn large-btn">
              Start Learning
              <ArrowRight size={18} />
            </button>

            <button className="secondary-btn">
              Explore Features
            </button>
          </div>

          <div className="trust-text">
            Built for smarter Class 10 preparation
          </div>

        </div>


        {/* AI Preview Card */}
        <div className="ai-preview">

          <div className="ai-header">
            <div className="robot-icon">
              🤖
            </div>

            <div>
              <h3>SmartStudy AI</h3>
              <span>Your AI Study Assistant</span>
            </div>

            <div className="online-dot"></div>
          </div>


          <div className="chat-message user-message">
            <label>YOU</label>
            <p>Explain Ohm's Law in simple language.</p>
          </div>


          <div className="chat-message ai-message">
            <label>AI ASSISTANT</label>

            <p>
              Ohm's Law explains the relationship between
              voltage, current and resistance.
            </p>

            <div className="formula">
              V = I × R
            </div>
          </div>


          <div className="source-card">
            <BookOpen size={18} />
            <div>
              <strong>Textbook</strong>
              <span>Page 142 · Chapter 12</span>
            </div>
          </div>

        </div>

      </section>


      {/* Features */}
      <section className="features" id="features">

        <div className="section-heading">
          <span>Everything students need</span>
          <h2>One platform for smarter learning</h2>
          <p>
            Study from your books, understand difficult topics,
            practice questions and track your progress.
          </p>
        </div>


        <div className="feature-grid">

          <FeatureCard
            icon={<FileText />}
            title="Notes & Books"
            text="Access chapter-wise notes, textbooks and study material."
          />

          <FeatureCard
            icon={<MessageCircleQuestion />}
            title="Ask AI"
            text="Ask any study doubt and get a simple explanation."
          />

          <FeatureCard
            icon={<Brain />}
            title="Weak Topic Tracker"
            text="Take quick quizzes and discover topics that need revision."
          />

          <FeatureCard
            icon={<BarChart3 />}
            title="Teacher Dashboard"
            text="Teachers can upload resources and understand student difficulties."
          />

        </div>

      </section>


      {/* How it works */}
      <section className="how-section" id="how-it-works">

        <div className="section-heading">
          <span>Simple learning process</span>
          <h2>Learn in three easy steps</h2>
        </div>

        <div className="steps">

          <div className="step">
            <div className="step-number">01</div>
            <BookOpen size={28} />
            <h3>Choose a topic</h3>
            <p>Select your subject and chapter.</p>
          </div>

          <div className="step">
            <div className="step-number">02</div>
            <MessageCircleQuestion size={28} />
            <h3>Ask or practice</h3>
            <p>Ask AI a doubt or take a quick quiz.</p>
          </div>

          <div className="step">
            <div className="step-number">03</div>
            <BarChart3 size={28} />
            <h3>Improve</h3>
            <p>See weak topics and revise smarter.</p>
          </div>

        </div>

      </section>


      {/* Footer */}
      <footer id="about">
        <div className="logo">
          <GraduationCap size={26} />
          <span>SmartStudy <b>AI</b></span>
        </div>

        <p>
          AI-powered learning platform for Class 10 students.
        </p>
      </footer>

    </div>
  );
}


/* Feature Card Component */
function FeatureCard({ icon, title, text }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{text}</p>
    </div>
  );
}


export default App;