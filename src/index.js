import React from "react";
import ReactDOM from "react-dom";
// CSS
import "./index.css";
// stateles funcational component
// always return JSX

const books = [
  {
    img: "https://m.media-amazon.com/images/I/41Z7tGl7MGL._AC_UY218_.jpg",
    title: "Mathematics Textbook For Class 6 Language English",
    author: "Navis Michael Bearly J",
  },
  {
    img: "https://m.media-amazon.com/images/I/81hyid7dI5L._AC_UY218_.jpg",
    title: "1001 Activities Book",
    author: "Dreamland Publications",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book img={img} title={title} author={author}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
