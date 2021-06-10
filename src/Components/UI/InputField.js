import React from "react";
import { Hint } from "react-autocomplete-hint";

const InputField = ({ hintData, preventPropagation, ...rest }) => {
  return (
    <Hint options={hintData ? hintData : []} allowTabFill preventPropagation>
      <input {...rest} />
    </Hint>
  );
};

export default InputField;
