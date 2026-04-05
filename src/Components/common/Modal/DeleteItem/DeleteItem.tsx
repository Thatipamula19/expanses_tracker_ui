import Modal from "../Modal";
import classes from "./deleteItem.module.css";

const DeleteItem = ({
	title,
	description,
	setOpen,
	onDelete,
}: {
	title: string;
	setOpen: (open: boolean) => void;
	description: string;
	onDelete: () => void;
}) => {
	const onCancel = () => setOpen(false);

	const handleDelete = () => {
		// setOpen(false);
		onDelete();
	};

	return (
		<Modal setOpen={setOpen}>
			<div className={classes?.delete_item}>
				<strong className={classes?.title}>{title}</strong>
				<p className={classes?.description}>{description}</p>
				<span className={classes?.description}>This action cannot be undone.</span>

				<div className={classes?.button_group}>
					<button onClick={onCancel} className={classes?.cancel_btn}>
						Cancel
					</button>
					<button onClick={handleDelete} className={classes?.delete_btn}>
						Delete
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default DeleteItem;
