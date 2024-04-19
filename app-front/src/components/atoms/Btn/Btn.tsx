import {  ReactElement } from 'react';
import { type BtnM } from './Btn.model';
import classNames from './Btn.module.css';


export const Btn = ({
  children,
  className,
  text,
  disabled,
  type,
  onClick,
  StartIcon,
  ...styles
}: BtnM): ReactElement => {
  const BtnStyles = { ...styles, '--text': text };

  const btnContent = typeof children === 'string' ? children : text;

  return (
    <button
      className={`${classNames.btn} ${className ?? ''}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
      style={BtnStyles}
    >
      {btnContent}
    </button>
  );
};