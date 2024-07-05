import React from 'react';



interface ButtonPros{
    text: string
    onClick: () => void;
    type?: 'primary' | 'secondary';
}
const Button = ({text,onClick, type ='primary'}: ButtonPros) => {
    return (
        <button className={`button ${type}`} onClick={onClick}>{text}</button>
    );
};

export default Button;