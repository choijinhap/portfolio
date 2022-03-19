import { createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import Layout from './components/Layout';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

const lightTheme = createTheme();
const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});
function App() {
	const [isThemeLight, setIsThemeLight] = useState(true);
	const [page, setPage] = useState(0);
	return (
		<ThemeProvider theme={isThemeLight ? lightTheme : darkTheme}>
			<Layout setIsThemeLight={setIsThemeLight} setPage={setPage}>
				{page == 0 && <Page1></Page1>}
				{page == 1 && <Page2></Page2>}
			</Layout>
		</ThemeProvider>
	);
}

export default App;
