import { Route, Routes as ReactRouterRoutes, Navigate } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
export default function Routes() {
	return (
		<ReactRouterRoutes>
			<Route path='/1' element={<Page1 />}></Route>
			<Route path='/2' element={<Page2 />}></Route>
			<Route path='/3' element={<Page3 />}></Route>
			<Route path='/4' element={<Page4 />}></Route>
			<Route path='/5' element={<Page5 />}></Route>
			<Route path='*' element={<Navigate replcae to='/1' />}></Route>
		</ReactRouterRoutes>
	);
}
