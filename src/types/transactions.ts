export type Transaction = {
	id: string;
	title: string;
	type: "expense" | "income" | string;
	amount: number;
	description: string;
	category: string;
	date: string;
};

export type FilterType = {
	label: string;
	value: string;
};

export type FilterItem = {
	id: number | string;
	name: string;
	options: FilterType[];
	value: FilterType;
	setValue: (val: FilterType) => void;
};

export type TransactionsStore = {
	transactions: Transaction[];
	date: FilterType;
	category: FilterType;
	transactionType: FilterType;
	sort: FilterType;

	setTransactions: (transactions: Transaction[]) => void;
	setDate: (date: FilterType) => void;
	setCategory: (category: FilterType) => void;
	setTransactionType: (transactionType: FilterType) => void;
	setSort: (sort: FilterType) => void;
};
