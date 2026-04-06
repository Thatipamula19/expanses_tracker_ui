import Cookies from "js-cookie";

export const setCookies = (name: string, value: string, expires?: number) => {
	Cookies.set(name, value, { expires });
};

export const removeCookies = (name: string) => {
	Cookies.remove(name);
};

export const getCookies = (name: string) => {
	return Cookies.get(name);
};
