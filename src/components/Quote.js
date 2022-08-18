import React, { Fragment, useState, useEffect } from "react";

import twitterIcon from "../assets/twitter.svg";
import styles from "./Quote.module.scss";

const Quote = () => {
  const [newQuote, setNewQuote] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let quotes = data.quotes;
        let randNum = Math.floor(Math.random() * quotes.length);
        let randQuote = quotes[randNum];
        setNewQuote(randQuote.quote);
        setNewAuthor(randQuote.author);
      });
  };

  const newQuoteHandler = () => {
    getQuote();
  };

  return (
    <Fragment>
      <div id="text">
        <p className={styles.text}>{newQuote}</p>
      </div>
      <div id="author">
        <p className={styles.author}>- {newAuthor}</p>
      </div>
      <div className={styles.buttons}>
        <a
          id="tweet-quote"
          title="Tweet this quote!"
          target="_top"
          href="https://twitter.com/intent/tweet"
          className={styles.iconWrapper}
        >
          <img className={styles.icon} src={twitterIcon} alt="tweet"></img>
        </a>
        <button
          onClick={newQuoteHandler}
          className={styles.buttonNew}
          id="new-quote"
        >
          New quote
        </button>
      </div>
    </Fragment>
  );
};

export default Quote;
