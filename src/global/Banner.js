import React from 'react';
import HeaderTitle from './HeaderTitle';

const Banner = ({ image, text, hx, textAlign, margin, padding, fontSize }) => {
  return (
    <div>
      <img src={`./img/banners/${image}`} alt="" />
      <HeaderTitle
        text={text}
        hx={hx}
        textAlign={textAlign}
        margin={margin}
        padding={padding}
        fontSize={fontSize}
      />
    </div>
  );
};

export default Banner;
