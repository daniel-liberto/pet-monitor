import React from 'react';
import './Btn.css';

const Btn = ({ text, padding, fontSize, url }) => {
  const style = {
    padding: padding,
    text: text,
    fontSize: fontSize,
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
