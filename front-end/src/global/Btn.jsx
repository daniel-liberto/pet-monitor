import React, { Children } from 'react';
import './Btn.css';
import { NavLink } from 'react-router-dom';

const Btn = ({
  children,
  padding,
  margin,
  fontSize,
  url,
  backgroundColor,
  ...props
}) => {
  const style = {
    padding: padding,
    fontSize: fontSize,
    margin: margin,
    backgroundColor: backgroundColor,
  };

  return (
    <NavLink to={`${url}`}>
      <button {...props} className="btn" style={style}>
        {children}
      </button>
    </NavLink>
  );
};

export default Btn;
