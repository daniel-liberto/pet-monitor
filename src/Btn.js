import React from 'react';
import './Btn.css';

const Btn = ({ text, padding, margin, fontSize, url }) => {
  const style = {
    padding: padding,
    text: text,
    fontSize: fontSize,
    margin: margin,
  };
  return (
    <>
      <button className="btn" style={style}>
        <a href={url}>{text}</a>
      </button>
    </>
  );
};

export default Btn;
