import { BrowserRouter, Route, Routes } from "react-router-dom";
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

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/transactions" element={<Transactions />} />
					<Route path="/reports" element={<Reports />} />
					<Route path="/goals" element={<Goals />} />
					<Route path="/budget" element={<Budget />} />
					<Route path="/sign-up" element={<Signup />} />
					<Route path="/sign-in" element={<Signin />} />
					<Route path="/forgot-password" element={<ForgotPassword />} />
					<Route path="/reset-password" element={<ResetPassword />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
