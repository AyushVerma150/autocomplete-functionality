import React from "react";

const Image = ({ src, style }) => {
  return <img src={src} className={style} alt="not available" />;
};

export default Image;
