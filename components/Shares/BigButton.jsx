import React from 'react';
import BigButtonSvg from './BigButtonSvg';
const BigCustomButton = ({ btntext }) => {
  return (

    <button className="big-custom-button">
      <ButtonSvg />
      <span className="big-custom-button-text">
        {btntext || 'VISIT'}</span>
    </button>

  );
};

export default BigCustomButton;
