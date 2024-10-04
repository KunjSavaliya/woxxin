import React from 'react';
import PropTypes from 'prop-types';
import { FaRegCirclePlay } from "react-icons/fa6";

const VideoButton = ({ text, onClick, className, type = 'Video', disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center py-3 px-8 rounded font-bold bg-[#6C63FF] hover:bg-[#373435] ${className}`} 
      disabled={disabled}
    >
      {text}
      <FaRegCirclePlay className="ml-2 -mt-[2px] " /> 
    </button>
  );
};

VideoButton.propTypes = {
  text: PropTypes.string.isRequired,  
  onClick: PropTypes.func,              
  className: PropTypes.string,         
  type: PropTypes.string,                
  disabled: PropTypes.bool,             
};

export default VideoButton;
