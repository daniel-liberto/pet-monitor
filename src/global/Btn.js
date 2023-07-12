import React from 'react';
import './Btn.css';
import { NavLink } from 'react-router-dom';

const Btn = ({ text, padding, margin, fontSize, url, backgroundColor }) => {
  const style = {
    padding: padding,
    text: text,
    fontSize: fontSize,
    margin: margin,
    backgroundColor: backgroundColor,
  };
  return (
    <>
      <button className="btn" style={style}>
        <NavLink to={`${url}`}>{text}</NavLink>
      </button>
    </>
  );
};

export default Btn;
