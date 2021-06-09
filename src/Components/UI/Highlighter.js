import React from "react";

import Highlighter from "react-highlight-words";

import styles from "./UI.module.css";

const HighlighterComponent = ({ searchResult, textToHighlight }) => {
  const hightlighterStyles = {
    color: "black",
    fontWeight: "bolder",
    backgroundColor: "transparent",
  };

  return (
    <Highlighter
      className={styles.Highlighter}
      highlightStyle={hightlighterStyles}
      searchWords={[searchResult]}
      autoEscape={true}
      textToHighlight={textToHighlight}
    />
  );
};

export default HighlighterComponent;
