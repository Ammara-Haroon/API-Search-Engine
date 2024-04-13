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
  const [currentPage, setCurrentPage] = useState(0);

  const updateSearchTerm = (searchTerm) => {
    console.log("back to page 0", searchTerm);
    setCurrentPage(0);
    setSearchTerm(searchTerm);
  };
  const pageStyleClass =
    `${style.section}` +
    (searchTerm ? ` ${style.section_searching}` : ` ${style.section_landing}`);
  //console.log(pageStyleClass);
  return (
    <>
      <section className={pageStyleClass}>
        <div className={style.wrapper}>
          <SearchingContextProvider>
            <Header updateSearchTerm={updateSearchTerm} />
          </SearchingContextProvider>
          <BooksLoader
            searchTerm={searchTerm}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
