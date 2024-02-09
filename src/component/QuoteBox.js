import "./quotes.css";
const QuoteBox = ({ text, email, handleClick, RandomColor }) => {

  return (
    <>
      <div id="quote-box" style={{}}>
        <div className="quote-text" style={{ opacity: 1 }}>
          <i className="fa fa-quote-left"> </i>
          <span id="text" className="comment">
            {text}
          </span>
        </div>
        <div className="quote-author" style={{ opacity: 1 }}>
          - <span id="author">{email.split("@")[0]}</span>
        </div>
        <div className="buttons">
          <a
            className="button"
            id="tweet-quote"
            title="Tweet this quote!"
            target="_blank"
            href="https://www.linkedin.com/in/jyoti-prakash-8287151bb/"
            style={{ backgroundColor: RandomColor }}
          >
            <i className="fa fa-linkedin" />
          </a>
          <a
            className="button"
            id="tumblr-quote"
            title="Post this quote on tumblr!"
            target="_blank"
            href="https://github.com/JyotiPrakash95"
            style={{ backgroundColor: RandomColor }}
          >
            <i className="fa fa-github" />
          </a>
          <button
            className="button"
            id="new-quote"
            style={{ backgroundColor: RandomColor }}
            onClick={handleClick}
          >
            New quote
          </button>
        </div>
      </div>
    </>
  );
};
export default QuoteBox;