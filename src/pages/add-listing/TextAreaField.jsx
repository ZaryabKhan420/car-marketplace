import React from "react";
import { Textarea } from "@/components/ui/textarea";
const TextAreaField = ({ value, handleInput, carInfo }) => {
  return (
    <Textarea
      name={value.name}
      required={value.required}
      defaultValue={carInfo?.[value.name]}
      onChange={(e) => handleInput(value.name, e.target.value)}
    />
  );
};

export default TextAreaField;
