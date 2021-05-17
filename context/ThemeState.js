import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

const ThemeState = (props) => {
	const [ darkMode, setDarkMode ] = useState('');

	return <ThemeContext.Provider value={{ darkMode }}>{props.children}</ThemeContext.Provider>;
};

export default ThemeState;
