import { MouseEvent, ReactNode } from "react";

export interface BtnM {
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    className: string;
    type?: 'button'| 'submit' | 'reset';
    children: ReactNode;
    text?: string;

    display?: string;
}