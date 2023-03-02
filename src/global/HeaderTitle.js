import React from 'react';
import { useRef } from 'react';
import './HeaderTitle.css';

const HeaderTitle = ({
  hx,
  text,
  textAlign,
  margin,
  padding,
  fontSize,
  color,
  content,
}) => {
  const CustomTag = `${hx}`;
  const [redimensionador, useRedimensionador] = React.useState(null);

  function CheckForWindowResize() {
    if (window.innerWidth <= 680) {
      fontSize = fontSize * 0.6 + 'px';
    } else if (window.innerWidth >= 681 && window.innerWidth <= 960) {
      fontSize = fontSize * 0.8 + 'px';
    } else if (window.innerWidth >= 961 && window.innerWidth <= 1239) {
      fontSize = fontSize + 'px';
    } else if (window.innerWidth >= 1240) {
      fontSize = fontSize * 1.3 + 'px';
    } else {
      fontSize = fontSize + 'px';
    }
    useRedimensionador(fontSize);
  }

  React.useEffect(() => {
    window.addEventListener('resize', CheckForWindowResize);
    CheckForWindowResize();
    return () => window.removeEventListener('resize', CheckForWindowResize);
  }, [redimensionador]);

  const style = {
    textAlign: textAlign,
    margin: margin,
    padding: padding,
    fontSize: redimensionador,
    color: color,
    '--content': content,
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
