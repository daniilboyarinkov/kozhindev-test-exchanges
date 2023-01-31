import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// пытаемся получить тему из локального хранилища браузера
// если там ничего нет, то пробуем получить тему из настроек системы
// если и настроек нет, то используем темную тему
const getTheme = () => {
    const theme = `${window?.localStorage?.getItem('theme')}`;
    if (['light', 'dark'].includes(theme)) {
        document.documentElement.dataset.theme = theme;
        return theme;
    }
    const userMedia = window.matchMedia('(prefers-color-scheme: light)');
    if (userMedia.matches) {
        document.documentElement.dataset.theme = 'light';
        return 'light';
    }
    document.documentElement.dataset.theme = 'dark';
    return 'dark';
};

const initialState = getTheme();

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (_, action: PayloadAction<string>) => {
            document.documentElement.dataset.theme = action.payload;
            try {
                localStorage.setItem('theme', action.payload);
            } catch (e) {
                console.log(e);
            }

            return action.payload;
        },
    },
});

export const { setTheme } = themeSlice.actions;
