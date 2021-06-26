import React from "react";
import ReactDOM from "react-dom";
// CSS
import "./index.css";
// stateles funcational component
// always return JSX

const firstBook = {
  img: "https://m.media-amazon.com/images/I/41Z7tGl7MGL._AC_UY218_.jpg",
  title: "Mathematics Textbook For Class 6 Language English",
  author: "Navis Michael Bearly J",
};

const secondBook = {
  img: "https://m.media-amazon.com/images/I/81hyid7dI5L._AC_UY218_.jpg",
  title: "1001 Activities Book",
  author: "Dreamland Publications",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
