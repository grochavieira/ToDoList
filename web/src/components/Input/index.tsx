import React from "react";

import "./styles.css";

interface InputProps {
  name: string;
  label: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  placeholder,
  value,
  setValue,
}) => {
  return (
    <div className="input-block">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        name={name}
        type="text"
        placeholder={placeholder}
        required
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Input;
