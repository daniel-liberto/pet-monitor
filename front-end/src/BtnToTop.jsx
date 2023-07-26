import React from 'react';
import './BtnToTop.css';

const BtnToTop = () => {
  const [backTop, setBackTop] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setBackTop(true);
      } else {
        setBackTop(false);
        window.removeEventListener('scroll', BtnToTop);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      {backTop && (
        <button className="btnTopContainer" onClick={scrollUp}></button>
      )}
    </>
  );
};

export default BtnToTop;
