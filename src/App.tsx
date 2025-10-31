import Navbar from "./components/Navbar";
import "./App.css"; // Assicurati di avere gli stili qui

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <header className="header">
        <h1 className="header-title">Starchette 🧶</h1>
        <p className="header-subtitle">Benvenuta nel mondo delle creazioni all’uncinetto!</p>
      </header>

      {/* Sezione vetrina */}
      <main className="main">
        <h2 className="section-title">Le nostre creazioni 💕</h2>

        <div className="card-container">
          {/* Card di esempio */}
          <div className="card">
            <div className="card-image">
              <span>Immagine prodotto</span>
            </div>
            <div className="card-body">
              <h3 className="card-title">Nome prodotto</h3>
              <p className="card-desc">Breve descrizione del prodotto.</p>
              <p className="card-price">€ 0</p>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <span>Immagine prodotto</span>
            </div>
            <div className="card-body">
              <h3 className="card-title">Nome prodotto</h3>
              <p className="card-desc">Breve descrizione del prodotto.</p>
              <p className="card-price">€ 0</p>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <span>Immagine prodotto</span>
            </div>
            <div className="card-body">
              <h3 className="card-title">Nome prodotto</h3>
              <p className="card-desc">Breve descrizione del prodotto.</p>
              <p className="card-price">€ 0</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} Starchette — Tutti i diritti riservati
      </footer>
    </div>
  );
}

export default App;
