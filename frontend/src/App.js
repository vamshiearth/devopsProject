import { useState } from "react";
import "./App.css";

function App() {
  const [mode, setMode] = useState("login");
  const isLogin = mode === "login";

  return (
    <div className="app">
      <header className="site-header">
        <div className="logo">DevOps Project</div>
        <button
          className="ghost-button"
          type="button"
          onClick={() => setMode(isLogin ? "signup" : "login")}
        >
          {isLogin ? "Sign up" : "Log in"}
        </button>
      </header>

      <main className="hero">
        <section className="hero-copy">
          <p className="eyebrow">Personal DevOps Playground</p>
          <h1>Learning DevOps, one deploy at a time.</h1>
          <p className="lead">
            This is my personal project for practicing real deployments on free
            tiers. Firebase handles identity, Postgres stores data, and Django
            keeps the API straightforward.
          </p>
          <div className="hero-actions">
            <button
              className="primary-button"
              type="button"
              onClick={() => setMode("signup")}
            >
              Create your account
            </button>
            <button
              className="secondary-button"
              type="button"
              onClick={() => setMode("login")}
            >
              I already have one
            </button>
          </div>
          <div className="stats">
            <div>
              <span className="stat-value">99.9%</span>
              <span className="stat-label">Uptime goal</span>
            </div>
            <div>
              <span className="stat-value">15m</span>
              <span className="stat-label">Cold start</span>
            </div>
            <div>
              <span className="stat-value">$0</span>
              <span className="stat-label">Monthly cost</span>
            </div>
          </div>
        </section>

        <section className="auth-card" id="auth">
          <div className="auth-toggle">
            <button
              className={isLogin ? "tab active" : "tab"}
              type="button"
              onClick={() => setMode("login")}
            >
              Log in
            </button>
            <button
              className={!isLogin ? "tab active" : "tab"}
              type="button"
              onClick={() => setMode("signup")}
            >
              Sign up
            </button>
          </div>

          <form className="auth-form">
            <label>
              Email
              <input type="email" placeholder="you@company.com" />
            </label>
            <label>
              Password
              <input type="password" placeholder="••••••••" />
            </label>
            {!isLogin && (
              <label>
                Confirm password
                <input type="password" placeholder="••••••••" />
              </label>
            )}
            <button className="primary-button full" type="submit">
              {isLogin ? "Log in" : "Create account"}
            </button>
            <p className="form-hint">
              By continuing you agree to the Terms and Privacy Policy.
            </p>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
