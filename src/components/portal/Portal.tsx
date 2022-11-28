import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

type Props = {
	children?: React.ReactNode;
};

const Portal = ({ children }: Props) => {
	const [container] = useState(() => {
		const element = document.createElement("div");
		element.classList.add("portal");
		return element;
	});

	useEffect(() => {
		document.body.appendChild(container);
		return () => {
			document.body.removeChild(container);
		};
	}, []);

	return ReactDOM.createPortal(children, container);
};

export default Portal;
