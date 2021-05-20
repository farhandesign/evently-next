import React from 'react';
import { Provider } from 'next-auth/client';
import useDarkMode from 'use-dark-mode';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { darkTheme, lightTheme } from '../src/theme';
import Layout from '../components/Layout';
import '../styles/main.scss';

export default function MyApp(props) {
	const { Component, pageProps } = props;

	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	const { value: isDark } = useDarkMode(false);
	const themeConfig = isDark ? darkTheme : lightTheme;

	return (
		<Provider session={pageProps.session}>
			<Head>
				<title>My page</title>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
			</Head>

			<ThemeProvider theme={themeConfig}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</Provider>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired
};
