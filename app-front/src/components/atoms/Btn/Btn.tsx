import {  ReactElement } from 'react';
import { type BtnM } from './Btn.model';
import classNames from './Btn.module.css';

export const Btn = ({
    onClick,
    className,
    children,
    type,
    text,

}: BtnM): ReactElement => {
    const BtnStyles: React.CSSProperties = {
        
    }
        return (
        <button
            className={`${classNames.btn} ${className ?? ''}`}
            style={BtnStyles}
            type={type}
            onClick={onClick}
            >
            {text ?? children}
        </button>
    );

};


