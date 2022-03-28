import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material';
import { useState } from 'react';
import Layout from './components/Layout';
const lightTheme = responsiveFontSizes(createTheme({}));
const darkTheme = responsiveFontSizes(
	createTheme(({ theme }) => ({
		palette: {
			mode: 'dark',
		},
	}))
);
function App() {
	const [isThemeLight, setIsThemeLight] = useState(true);

	return (
		<ThemeProvider theme={isThemeLight ? lightTheme : darkTheme}>
			<Layout setIsThemeLight={setIsThemeLight}></Layout>
		</ThemeProvider>
	);
}

export default App;
