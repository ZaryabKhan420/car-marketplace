import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
const DropDownField = ({ value, handleInput, carInfo }) => {
  return (
    <Select
      onValueChange={(e) => handleInput(value.name, e)}
      required={value.required}
      defaultValue={carInfo?.[value.name]}
    >
      <SelectTrigger className="w-full text-md border-none outline-none shadow-none text-sm">
        <SelectValue
          placeholder={carInfo ? carInfo?.[value.name] : value.label}
        />
      </SelectTrigger>
      <SelectContent>
        {value.options.map((value, idx) => (
          <SelectItem value={value} key={idx}>
            {value}{" "}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default DropDownField;
