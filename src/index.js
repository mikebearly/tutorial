import React from "react";
import ReactDOM from "react-dom";
// CSS
import "./index.css";
// stateles funcational component
// always return JSX
import { books } from "./books";
import Book from "./Book";
import { greeting } from "./testing/testing";

function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
