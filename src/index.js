import React from "react";
import ReactDOM from "react-dom";
// CSS
import "./index.css";
// stateles funcational component
// always return JSX
const author = "Navis Michael Bearly J";
const title = "Mathematics Textbook For Class 6 Language English";
const img = "https://m.media-amazon.com/images/I/41Z7tGl7MGL._AC_UY218_.jpg";

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
