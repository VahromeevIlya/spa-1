import { useSelector } from "react-redux";
import { Header, Footer, MenuMobileDown, MenuMobileUp } from "./components";
import Adaptive from "./layouts/Adaptive";
import { mediaSize } from "./redux/adaptive/selectors";

function App() {
	const media: number = useSelector(mediaSize);
	return (
		<Adaptive>
			<Header media={media}/>
			<main className="page">
				<MenuMobileUp media={media} />
				<div className="full"></div>
			</main>
			<MenuMobileDown media={media}/>
			<Footer />
		</Adaptive>
	);
}

export default App;
