import { createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import Layout from './components/Layout';

const lightTheme = createTheme();
const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});
function App() {
	const [isThemeLight, setIsThemeLight] = useState(true);

	return (
		<ThemeProvider theme={isThemeLight ? lightTheme : darkTheme}>
			<Layout setIsThemeLight={setIsThemeLight}></Layout>
		</ThemeProvider>
	);
}

export default App;
