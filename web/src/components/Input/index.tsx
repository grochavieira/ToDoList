import React from "react";

import "./styles.css";

interface InputProps {
  name: string;
  label: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ name, label, placeholder }) => {
  return (
    <div className="input-block">
      <input name={name} type="text" placeholder={placeholder} required />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Input;
