import React from "react";

import "./styles.css";

interface ButtonProps {
  name: string;
}

const Button: React.FC<ButtonProps> = ({ name }) => {
  return (
    <div className="button-block">
      <button type="submit">{name}</button>
    </div>
  );
};

export default Button;
