import React from "react";

export const fetchData = async (url, parameters) => {
  const response = await fetch(
    `${url}?${parameters
      .map((param) => `${param.key}=${param.value}`)
      .join("&")}`
  );
  if (!response.ok) {
    console.warn("...woops.Something went wrong !");
    throw new Error("...woops.Something went wrong !");
  }
  const data = await response.json();
  if (!data) {
    console.warn("No data fetched");
    throw new Error("No data fetched");
  }
  return data;
};

export const fetchBooks = async (
  searchTerm,
  startIndex = 0,
  maxResults = 10
) => {
  const data = await fetchData("https://www.googleapis.com/books/v1/volumes", [
    {
      key: "q",
      value: searchTerm,
    },
    {
      key: "startIndex",
      value: startIndex,
    },
    {
      key: "maxResults",
      value: maxResults,
    },
  ]);
  //console.log("fetching from", startIndex, maxResults);
  if (data.totalItems === 0) {
    throw new Error(`No books found for '${searchTerm}'`);
  }
  //image author title description

  const cleanedData = data.items.map((vol) => ({
    id: vol.id,
    authors: vol.volumeInfo.authors || ["Authors Unknown"],
    image: vol.volumeInfo.imageLinks && vol.volumeInfo.imageLinks.thumbnail,
    description: vol.volumeInfo.description,
    title: vol.volumeInfo.title,
    categories: vol.volumeInfo.categories,
    pageCount: vol.volumeInfo.pageCount,
    printType: vol.volumeInfo.printType,
    publishedDate: vol.volumeInfo.publishedDate,
    publisher: vol.volumeInfo.publisher,
    subtitle: vol.volumeInfo.subtitle,
    previewLink: vol.volumeInfo.previewLink,
  }));

  //console.log("cleanData", cleanedData);
  return { totalCount: data.totalItems, booksList: cleanedData };
};
