import React, { useState } from 'react'
import './Button.css'

type ButtonProps = {
    size: 'small' | 'medium' | 'large';
   
}

const Button:React.FC<ButtonProps> = ({size}: ButtonProps) => {
    const [buttonText, setButtonText] = useState<string>('đây là nút click me')
    const handleButtonClick = () => {
     
        setButtonText(size == "small" ? 'loading' : "đây là nút click me"); 
      };
  return (
    <button className={`button ${size}`} onClick={handleButtonClick}>{buttonText}</button>
    
  )
}

export default Button