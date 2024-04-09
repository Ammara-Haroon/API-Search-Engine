import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import BooksLoader from "./containers/BooksLoader";
import Footer from "./components/Footer/Footer";
import React, { useState } from "react";
import style from "./App.module.scss";
function App() {
  const [searchTerm, setSearchTerm] = useState(null);
  const updateSearchTerm = (searchTerm) => {
    setSearchTerm(searchTerm);
  };
  return (
    <section className={style.section}>
      <div>
        <Header />
        <SearchBar searchForBooks={updateSearchTerm} />
        <BooksLoader searchTerm={searchTerm} />
        <Footer />
      </div>
    </section>
  );
}

export default App;
