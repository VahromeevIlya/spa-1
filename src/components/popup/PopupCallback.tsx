import FormCallback from "../forms/FormCallback";
import { SimpleAnimatedModal } from "../SimpleAnimatedModal";

type Props = {
	opened: boolean;
	setOpened: (bool: boolean) => void;
};

const PopupCallback = ({ opened, setOpened }: Props) => {
	return (
		<SimpleAnimatedModal opened={opened} onClose={() => setOpened(false)}>
			<div className="popup__body form form--dark">
				<FormCallback opened={opened} setOpened={setOpened} classForm="form--dark" />
			</div>
		</SimpleAnimatedModal>
	);
};

export default PopupCallback;
