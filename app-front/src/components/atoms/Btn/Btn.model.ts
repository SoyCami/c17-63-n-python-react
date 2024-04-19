import { ReactNode, MouseEvent, ReactElement } from 'react';

export interface BtnM {
  // Propiedades generales
  className?: string;
  children?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  text?: string;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  StartIcon?: ReactElement;

  // Propiedades generales de fuente
  fontWeight?: string;
  fontStyle?: string;
  fontSize?: string;
  color?: string;
  hColor?: string;
  aColor?: string;
  dColor?: string;
  textDecoration?: string;

  // Propiedades generales de estilo
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  gap?: string;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  bg?: string;
  hBg?: string;
  aBg?: string;
  dBg?: string;
  border?: string;
  radius?: string;
  borderColor?: string;
  hBorderColor?: string;
  aBorderColor?: string;
  dBorderColor?: string;
  shadow?: string;
  hIconColor?: string;
}
