import { useState } from 'react';

export default function Auth() {
  const [mode, setMode] = useState('login');
  const isRegistering = mode === 'register';

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <main className="auth-page">
      <section className="auth-card" aria-labelledby="auth-title">
        <h1 id="auth-title">Bienvenue sur HabitLab</h1>

        <form className="auth-form" onSubmit={handleSubmit}>
          {isRegistering && (
            <label className="auth-field">
              <span>Pseudo</span>
              <input
                type="text"
                name="username"
                autoComplete="username"
                maxLength={50}
                required
              />
            </label>
          )}

          <label className="auth-field">
            <span>E-mail</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
            />
          </label>

          <label className="auth-field">
            <span>Mot de passe</span>
            <input
              type="password"
              name="password"
              autoComplete={isRegistering ? 'new-password' : 'current-password'}
              required
            />
          </label>

          {!isRegistering && (
            <button className="forgot-password" type="button">
              Mot de passe oublié ?
            </button>
          )}

          <button className="auth-submit" type="submit">
            {isRegistering ? 'S’inscrire' : 'Connexion'}
          </button>
        </form>

        <p className="auth-switch">
          {isRegistering ? 'Vous avez déjà un compte ?' : 'Pas encore de compte ?'}
          {' '}
          <button
            type="button"
            onClick={() => setMode(isRegistering ? 'login' : 'register')}
          >
            {isRegistering ? 'Connexion' : 'S’inscrire'}
          </button>
        </p>
      </section>
    </main>
  );
}
