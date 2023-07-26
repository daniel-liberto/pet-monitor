import React from 'react';
import HeaderTitle from './HeaderTitle';
import './Banner.css';
import { useLocation } from 'react-router-dom';
import initAnimacaoScroll from '../script/simple-anime';

const Banner = ({
  image,
  text,
  hx,
  textAlign,
  margin,
  padding,
  fontSize,
  color,
  content,
}) => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    initAnimacaoScroll();
  }, [pathname]);
  return (
    <div className="bg-banner">
      <div className="banner">
        <img
          src={image}
          alt=""
          style={{ margin: '0 auto', gridRow: '1', gridColumn: '1' }}
        />
        <div
          className="banner-title fadeInDown"
          data-anime="scroll"
          data-anime-time="200"
        >
          <HeaderTitle
            text={text}
            hx={hx}
            textAlign={textAlign}
            margin={margin}
            padding={padding}
            fontSize={fontSize}
            color={color}
            content={content}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
