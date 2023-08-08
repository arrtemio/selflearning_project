import { classNames } from 'shared/lib/classNames/classNames';

import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
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
    size?: ButtonSize
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
    const {
        children = 'Text',
        theme,
        className,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={
                classNames(cls.Button, { [cls.square]: square }, [className, cls[theme], cls[size]])
            }
            {...otherProps}
        >
            {children}
        </button>
    );
};
