import React from "react";

import Image from "../UI/Image";
import HighlighterComponent from "../UI/Highlighter";

import styles from "./Autocomplete.module.css";

const CreateList = ({ data, clicked, searchText, onItemClick }) => {
  const list = data.map((item) => {
    return (
      <div
        onClick={() => {
          onItemClick(item);
        }}
        className={styles.createListPointer}
      >
        <HighlighterComponent
          searchResult={searchText}
          textToHighlight={item.name}
        />
        {item.image ? (
          <Image src={item.image} style={styles.imageStyle} />
        ) : null}
      </div>
    );
  });

  return (
    <div onClick={clicked} className={styles.createListDiv}>
      {list}
    </div>
  );
};

export default CreateList;
