import Modal from "@/Components/common/Modal/Modal";
import classes from "./deleteTransaction.module.css";

const DeleteTransaction = ({ setOpen, id }: { setOpen: (open: boolean) => void; id: string }) => {
	const onCancel = () => setOpen(false);

	const onDelete = () => {
		// setOpen(false);
		console.log(id);
	};

	return (
		<Modal setOpen={setOpen}>
			<div className={classes?.delete_transaction}>
				<strong className={classes?.title}>Delete Transaction?</strong>
				<p className={classes?.description}>Are you sure you want to delete this transaction?</p>
				<span className={classes?.description}>This action cannot be undone.</span>

				<div className={classes?.button_group}>
					<button onClick={onCancel} className={classes?.cancel_btn}>
						Cancel
					</button>
					<button onClick={onDelete} className={classes?.delete_btn}>
						Delete
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default DeleteTransaction;
