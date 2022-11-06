import React from "react";

type Props = {
	className?: string;
};

const ButtonCircle = ({ className }: Props) => {
	return (
		<button className={className ? className : ""} type="button">
			<svg>
				<circle
					className="timer__background"
					cx="20"
					cy="20"
					r="19"
				></circle>
				<circle className="timer__progress" cx="20" cy="20" r="19"></circle>
			</svg>
		</button>
	);
};

export default ButtonCircle;
