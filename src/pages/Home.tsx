import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
	About,
	Advantages,
	Cost,
	Fullscreen,
	Keep,
	Order,
	Portfolio,
	Team,
	Work,
} from "../components";
import Leafs from "../components/leafs/Leafs";
import { setHeaderTheme } from "../redux/adaptive/slice";

type Props = {};

const Home = (props: Props) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setHeaderTheme("light"));
	}, []);
	return (
		<>
			<Leafs />
			<Fullscreen />
			<About />
			<Order />
			<Team />
			<Portfolio />
			<Keep />
			<Work />
			<Cost />
			<Advantages />
		</>
	);
};

export default Home;
