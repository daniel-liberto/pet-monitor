import React from 'react';
import './Btn.css';

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
        <a href={url}>{text}</a>
      </button>
    </>
  );
};

export default Btn;
