import React from "react";

import CONSTANTS from "../../Constants/Constants";

const Image = ({ src, style }) => {
  return (
    <img src={src} className={style} alt={CONSTANTS.UI.IMAGE_UN_AVAILABLE} />
  );
};

export default Image;
