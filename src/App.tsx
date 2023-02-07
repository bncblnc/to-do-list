import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h2>Conteúdo</h2>
      </main>
      <Footer />
    </div>
  );
}

export default App;
