import { classNames, Mods } from 'shared/lib/classNames/classNames';

import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    L = 'size_l',
    M = 'size_m',
    XL = 'size_xl',
    S = 'size_s'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode
}

export const Button = memo((props: ButtonProps) => {
    const {
        children = 'Text',
        theme = ButtonTheme.OUTLINE,
        className,
        square,
        size = ButtonSize.M,
        disabled,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={
                classNames(cls.Button, mods, [className, cls[theme], cls[size]])
            }
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
