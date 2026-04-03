import Input from "@/Components/common/Modal/Input/Input";
import Modal from "@/Components/common/Modal/Modal";
import classes from "./styles.module.css";

const CreateTransaction = ({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) => {
	return (
		<Modal setOpen={setOpen}>
			<form className={classes?.form}>
				<h3 className={classes?.title}>Add Transaction</h3>
				<div className={classes?.form_fields}>
					<Input type="text" placeholder="Transaction Title" />
					<Input type="textarea" placeholder="Describe the transaction..." />
					<Input type="select" placeholder="Select Category" />
					<Input type="select" placeholder="Select Transaction Type" />
					<Input type="text" placeholder="Amount" halfWidth={true} />
				</div>
				<div className={classes?.form_footer}>
					<button type="button" onClick={() => setOpen(false)} className={classes?.cancel_btn}>
						Cancel
					</button>
					<button type="submit" className={classes?.add_btn}>
						Add
					</button>
				</div>
			</form>
		</Modal>
	);
};

export default CreateTransaction;
