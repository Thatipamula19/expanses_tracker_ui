import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import Dashboard from "./pages/Dashboard/Dashboard";
import Signup from "./pages/Auth/Signup/Signup";
import Signin from "./pages/Auth/Signin/Signin";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword/ResetPassword";
import Transactions from "./pages/Transactions/Transactions";
import Budget from "./pages/Budget/Budget";
import Reports from "./pages/Reports/Reports";
import Goals from "./pages/Goals/Goals";
import useAuthStore from "./store/useAuthStore";
import { useEffect } from "react";
import { getCookies } from "./utils/auth";

function App() {
	const { isAuthenticated, setAuthenticated, setUser } = useAuthStore();

	useEffect(() => {
		const userInfo = getCookies("user_info");
		const token = getCookies("token");
		if (userInfo && token) {
			setUser(JSON.parse(userInfo));
			setAuthenticated(true);
		} else {
			setAuthenticated(false);
		}
	}, []);
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={ isAuthenticated ? <Dashboard /> : <Navigate to="/sign-in" />} />
					<Route path="/transactions" element={ isAuthenticated ? <Transactions /> : <Navigate to="/sign-in" />} />
					<Route path="/reports" element={ isAuthenticated ? <Reports /> : <Navigate to="/sign-in" />} />
					<Route path="/goals" element={ isAuthenticated ? <Goals /> : <Navigate to="/sign-in" />} />
					<Route path="/budget" element={ isAuthenticated ? <Budget /> : <Navigate to="/sign-in" />} />
					<Route path="/sign-up" element={ !isAuthenticated ? <Signup /> : <Navigate to="/" />} />
					<Route path="/sign-in" element={ !isAuthenticated ? <Signin /> : <Navigate to="/" />} />
					<Route path="/forgot-password" element={ !isAuthenticated ? <ForgotPassword /> : <Navigate to="/" />} />
					<Route path="/reset-password" element={ !isAuthenticated ? <ResetPassword /> : <Navigate to="/" />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
