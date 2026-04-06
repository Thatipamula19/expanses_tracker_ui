export const serviceErrorHandler = (error: any) => {
	const msg = Array.isArray(error?.response?.data?.message)
		? error?.response?.data?.message.join(", ")
		: error?.response?.data?.message;
	return {
		success: false,
		err_msg: msg,
	};
};
