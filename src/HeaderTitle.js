import React from 'react';
import './HeaderTitle.css';

const HeaderTitle = ({ hx, text, textAlign, margin, padding, fontSize }) => {
  const CustomTag = `${hx}`;
  const style = {
    textAlign: textAlign,
    margin: margin,
    padding: padding,
    fontSize: fontSize,
  };
  return (
    <>
      <CustomTag className="title" style={style}>
        {text}
      </CustomTag>
    </>
  );
};

export default HeaderTitle;
