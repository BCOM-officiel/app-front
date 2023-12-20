import React, { useState } from 'react';
import Button from '@mui/material/Button';

interface CustomButtonProps {
  text: string;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const customButtonStyle: React.CSSProperties = {
    borderRadius: '35px',
    backgroundColor: isHovered ? 'white' : 'black',
    color: isHovered ? 'black' : 'white',
    transition: 'background-color 0.3s, color 0.3s',
  };

  return (
    <Button
      variant="contained"
      onClick={onClick}
      style={customButtonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </Button>
  );
};

export default CustomButton;