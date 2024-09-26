import React from "react";
import { Input } from "@/components/ui/input";
const InputField = ({ value, handleInput, carInfo }) => {
  return (
    <div>
      <Input
        min="0"
        type={value.fieldType}
        id={value.name}
        name={value.name}
        defaultValue={carInfo?.[value.name]}
        required={value.required}
        onChange={(e) => {
          handleInput(value.name, e.target.value);
        }}
      />
    </div>
  );
};

export default InputField;
