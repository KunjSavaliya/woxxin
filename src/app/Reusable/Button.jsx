import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';

const Button = ({ text, onClick, className, type = 'button', disabled = false, iconColor = 'white' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center py-3 px-8 rounded font-bold ${className}`} 
      disabled={disabled}
    >
      {text}
      <FaArrowRight className="ml-2" style={{ color: iconColor }} /> 
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,  
  onClick: PropTypes.func,              
  className: PropTypes.string,         
  type: PropTypes.string,                
  disabled: PropTypes.bool,             
  iconColor: PropTypes.string,           
};

export default Button;
