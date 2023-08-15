import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import { useState } from 'react';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onUsernameChange = (value: string) => {
        setUsername(value);
    };

    const onPasswordChange = (value: string) => {
        setPassword(value);
    };

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                value={username}
                onChange={onUsernameChange}
                placeholder="username"
                type="text"
                autoFocus
            />
            <Input
                value={password}
                onChange={onPasswordChange}
                placeholder="password"
                type="text"
            />
            <Button onClick={() => console.log(username, password)}>
                {t('Войти')}
            </Button>
        </div>
    );
};
