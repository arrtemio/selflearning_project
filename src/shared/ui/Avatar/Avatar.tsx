import { classNames, Mods } from 'shared/lib/classNames/classNames';

import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

export enum AvatarTheme {
    ROUNDER = 'rounded',
    SQUARE = 'square'
}

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
    theme?: AvatarTheme
}

export const Avatar = (props: AvatarProps) => {
    const {
        className,
        alt = 'Img',
        src,
        size,
        theme = AvatarTheme.ROUNDER,
    } = props;

    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    const mods: Mods = {

    };

    return (
        <img
            className={classNames(cls.Avatar, mods, [className, cls[theme]])}
            src={src}
            alt={alt}
            style={styles}
        />
    );
};
