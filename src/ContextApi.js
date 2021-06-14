import React, { useState } from 'react';

import zh from './i18n/zh';
import en from './i18n/en'

export const ContextApi = React.createContext();

export const Api = props =>{
    const [ lang, setLang ] = useState('zh');
    const [ theme, setTheme ] = useState('light');
    const locale = lang === 'zh' ? zh : en;
    const textTheme = theme === 'light' ? 'black' : 'white';
    const bgTheme = theme === 'light' ? 'white' : 'black';
    const value = {
        lang, 
        setLang,
        locale,
        theme,
        setTheme,
        textTheme,
        bgTheme
    }
    return (
        <ContextApi.Provider value={value}>
            {props.children}
        </ContextApi.Provider>
    )
}
