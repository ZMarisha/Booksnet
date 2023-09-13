import React from "react";
import d from './Button.module.css';

interface IButton {
    children: string,
    onClick: () => void,
    icon: string,
    disabled: boolean
}


const Button:React.FC<IButton> = ({children, onClick, icon, disabled}) => {
    
console.log(children)
    return (
        <button className={d.btn} onClick={onClick} type='submit' disabled={disabled}>
            <div className={d.imgBtn}>
                <img src={icon} alt='button for application'/>
            </div>
            <p>{children}</p>
        </button>
    )
}

export default Button;