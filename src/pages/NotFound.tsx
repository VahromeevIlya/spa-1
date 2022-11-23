import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setHeaderTheme } from "../redux/adaptive/slice";

const NotFound = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setHeaderTheme("dark"));
	}, []);
	
	return <div>NotFound</div>;
};

export default NotFound;
