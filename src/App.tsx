import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Adaptive from "./layouts/Adaptive";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { mediaSize } from "./redux/adaptive/selectors";

function App() {
	const media: number = useSelector(mediaSize);
	return (
		<Routes>
			<Route path="/" element={<Adaptive media={media} />}>
					<Route path="" element={<Home/>}/>
					<Route path="*" element={<NotFound/>}/>
			</Route>
		</Routes>
	);
}

export default App;
