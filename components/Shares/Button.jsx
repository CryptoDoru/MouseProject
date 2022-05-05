import React from 'react';
import ButtonSvg from './ButtonSvg';
const CustomButton = ({ btntext }) => {
  return (

    <button className="custom-button">
      <ButtonSvg />
      <span className="custom-button-text">
        {btntext || 'VISIT'}</span>
    </button>

  );
};

export default CustomButton;
