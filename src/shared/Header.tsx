import React from 'react';

import { LastUpdateBlock } from './LastUpdateBlock';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setTheme } from '../app/theme/slice';
import s from '../style/shared/Header.module.scss';
import { ThemeToggleButtonSVG } from '../svg/ThemeToggleButtonSVG';

export const Header = () => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector((state) => state.theme);

    const handleThemeChange = () => {
        const toggledTheme = theme === 'dark' ? 'light' : 'dark';
        dispatch(setTheme(toggledTheme));
    };

    return (
        <header className={s.header}>
            <div className={s['header__left-group']}>
                <a className={s.header__logo}>Name</a>
            </div>
            <div className={s['header__right-group']}>
                <LastUpdateBlock />
                <button className="btn-ghost btn" onClick={handleThemeChange}>
                    <ThemeToggleButtonSVG theme={theme} />
                </button>
            </div>
        </header>
    );
};
