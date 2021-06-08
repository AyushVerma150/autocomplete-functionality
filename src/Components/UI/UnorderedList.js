import React from "react";

const UnorderedList = ({ listData }) => {
  return (
    <div>
      <ul style={{ textAlign: "left" }}>
        {listData.map((listItem) => {
          return (
            <div style={{ padding: "3px" }}>
              <li>{listItem.name}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default UnorderedList;
