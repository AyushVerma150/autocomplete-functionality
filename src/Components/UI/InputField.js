import React from "react";

const InputField = (props) => {
  return (
    <div>
      <input {...props} />
      {props.children}
    </div>
  );
};

export default InputField;
