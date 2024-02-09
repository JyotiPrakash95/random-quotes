import React, { useState, useEffect } from "react";
import QuoteBox from "./component/QuoteBox";
import "./App.css";

const App = () => {
  const [quote, setQuote] = useState({ text: "", email: "" });
  const [genrateColor, setColor] = useState("#000000"); // Initial color
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuote();
    setLoading(true);
    handleClick();
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 500);
  const fetchQuote = async () => {
    try {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomData = data[randomIndex];
      setQuote({ text: randomData.text, email: randomData.author });
      // setLoading(false); // Set loading to false after data is fetched
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
      {isLoading ? (
        <div className="spinner"></div>
      ) : (
        <QuoteBox
          text={quote.text}
          email={quote.email}
          handleClick={handleClick}
          RandomColor={genrateColor}
        />
      )}
    </div>
  );
};

export default App;
