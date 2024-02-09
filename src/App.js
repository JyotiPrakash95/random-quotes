import React, { useState, useEffect } from "react";
import QuoteBox from "./component/QuoteBox";

const App = () => {
  const [quote, setQuote] = useState({ text: "", email: "" });
  const [genrateColor, setColor] = useState("#000000"); // Initial color

  useEffect(() => {
    fetchQuote();
    handleClick();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomData = data[randomIndex];
      setQuote({ text: randomData.body, email: randomData.email });
      console.log(data);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  const handleClick = () => {
    fetchQuote();
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
    document.body.style.backgroundColor = randomColor;
    document.body.style.color = randomColor;
  };

  return (
    <div>
      <QuoteBox
        text={quote.text}
        email={quote.email}
        handleClick={handleClick}
        RandomColor={genrateColor}
      />
    </div>
  );
};

export default App;
