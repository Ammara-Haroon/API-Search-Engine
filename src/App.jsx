import Header from "./components/Header/Header";
import BooksLoader from "./containers/BooksLoader";
import Footer from "./components/Footer/Footer";
import React, { useContext, useState } from "react";
import style from "./App.module.scss";
import SearchingContextProvider, {
  SearchingContext,
} from "./components/Context/SearchingContext";
function App() {
  const [searchTerm, setSearchTerm] = useState(null);

  const updateSearchTerm = (searchTerm) => {
    setSearchTerm(searchTerm);
  };
  const pageStyleClass =
    `${style.section}` +
    (searchTerm ? ` ${style.section_searching}` : ` ${style.section_landing}`);
  console.log(pageStyleClass);
  return (
    <section className={pageStyleClass}>
      <div className={style.wrapper}>
        <SearchingContextProvider>
          <Header updateSearchTerm={updateSearchTerm} />
        </SearchingContextProvider>
        <BooksLoader searchTerm={searchTerm} />
      </div>
      <Footer />
    </section>
  );
}

export default App;
