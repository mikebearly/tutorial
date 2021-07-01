import React, { useState } from "react";

const Test = () => {
  const [text, setText] = useState("Michael");

  const handleChange = () => {
    if (text === "Michael") {
      setText("Navis");
    } else {
      setText("Michael");
    }
  };

  return (
    <div>
      {text}
      <button onClick={handleChange}>change text</button>
    </div>
  );
};

export default Test;
