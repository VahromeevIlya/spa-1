import { useState } from "react";
import FormCallback from "../forms/FormCallback/FormCallback";
import { SimpleAnimatedModal } from "../SimpleAnimatedModal";
import PopupSuccess from "./PopupSuccess";

type Props = {
	opened: boolean;
	setOpened: (bool: boolean) => void;
};

const PopupCallback = ({ opened, setOpened }: Props) => {
	const [success, setSuccess] = useState(false);
	return (
		<>
			<SimpleAnimatedModal opened={opened} onClose={() => setOpened(false)}>
				<div className="popup__body form form--dark">
					<FormCallback
						closeCallback={() => setOpened(false)}
						opened={success}
						setOpened={setSuccess}
						classForm="form--dark"
					/>
				</div>
			</SimpleAnimatedModal>
			<PopupSuccess opened={success} setOpened={setSuccess} />
		</>
	);
};

export default PopupCallback;
