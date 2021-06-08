import React from "react";

const UnorderedList = ({ listData }) => {
  return (
    <div>
      <ul style={{ textAlign: "left" }}>
        {listData.map((listItem) => {
          return (
            <div style={{ padding: "3px" }}>
              <li>{listItem.name}</li>
              {listItem.reference.length >= 1 ? (
                <a href={listItem.reference}>Reference</a>
              ) : null}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default UnorderedList;
