import { classNames } from 'shared/lib/classNames/classNames';

import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
    const {
        children = 'Text',
        theme,
        className,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
