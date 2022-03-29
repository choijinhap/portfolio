import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Routes from './pages/Routes';
const lightTheme = responsiveFontSizes(createTheme({}));
const darkTheme = responsiveFontSizes(
	createTheme({
		palette: {
			mode: 'dark',
		},
	})
);
function App() {
	const [isThemeLight, setIsThemeLight] = useState(true);

	return (
		<ThemeProvider theme={isThemeLight ? lightTheme : darkTheme}>
			<BrowserRouter>
				<Layout setIsThemeLight={setIsThemeLight}>
					<Routes />
				</Layout>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
