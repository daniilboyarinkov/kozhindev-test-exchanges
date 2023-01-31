import React from 'react';

import { LastUpdateBlock } from './LastUpdateBlock';

import { setTheme } from '../app/theme/slice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { ThemeToggleButtonSVG } from '../svg/ThemeToggleButtonSVG';

import s from '../style/shared/Header.module.scss';

export const Header = () => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector((state) => state.theme);

    const handleThemeChange = () => {
        const next = theme === 'dark' ? 'light' : 'dark';
        dispatch(setTheme(next));
    };

    return (
        <header className={s.header}>
            <div className={s['header__left-group']}>
                <a className={s.header__logo}>Name</a>
            </div>
            <div className={s['header__right-group']}>
                <LastUpdateBlock />
                <button className="btn btn-ghost" onClick={handleThemeChange}>
                    <ThemeToggleButtonSVG theme={theme} />
                </button>
            </div>
        </header>
    );
};
