import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';

const Button = ({ text, onClick, className, type = 'button', disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center py-2 px-8 rounded font-bold   ${className}`} 
      disabled={disabled}
    >
      {text}
      <FaArrowRight className="ml-2" /> 
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,  
  onClick: PropTypes.func,              
  className: PropTypes.string,         
  type: PropTypes.string,                
  disabled: PropTypes.bool,             
};

export default Button;
