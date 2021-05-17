import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const coreThemeObj = {
	secondary: {
		main: '#DC004E'
	},
	error: {
		main: red.A400
	}
};

export const darkTheme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#fff'
		},
		...coreThemeObj
	}
});

export const lightTheme = createMuiTheme({
	palette: {
		type: 'light',
		...coreThemeObj,
		primary: {
			main: '#0295FF'
		},
		info: {
			main: '#A0A8B2'
		},
		text: {
			primary: '#363B47',
			secondary: '#A0A8B2'
		},

		background: {
			default: '#F1F5F9'
		}
	}
});
