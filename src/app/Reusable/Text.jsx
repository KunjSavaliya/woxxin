import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ 
  children, 
  size = '',      
  color = 'text-[#373435]', 
  className = ''         
}) => {
  return (
    <p className={`${className} ${size} ${color} text-center font-bold `}>
      {children}
    </p>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired, 
  size: PropTypes.string, 
  color: PropTypes.string, 
  className: PropTypes.string, 
};

export default Text;
