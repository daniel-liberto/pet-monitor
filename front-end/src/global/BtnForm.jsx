import React from 'react';
import './Btn.css';

const BtnForm = ({ children, padding, margin, fontSize, ...props }) => {
  const style = {
    padding: padding,
    fontSize: fontSize,
    margin: margin,
  };

  return (
    <button {...props} className="btn btnForm" style={style}>
      {children}
    </button>
  );
};

export default BtnForm;
