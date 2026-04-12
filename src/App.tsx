import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy } from "react";
const ForgotPassword = lazy(() => import('./pages/Auth/ForgotPassword/ForgotPassword'));
const ResetPassword = lazy(() => import('./pages/Auth/ResetPassword/ResetPassword'));
const Signin = lazy(() => import('./pages/Auth/Signin/Signin'));
const Signup = lazy(() => import('./pages/Auth/Signup/Signup'));
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));
const Budget = lazy(() => import('./pages/Budget/Budget'));
const Goals = lazy(() => import('./pages/Goals/Goals'));
const Reports = lazy(() => import('./pages/Reports/Reports'));
const Transactions = lazy(() => import('./pages/Transactions/Transactions'));
const UserProfile = lazy(() => import('./pages/UserProfile/UserProfile'));
import useAuthStore from "./store/useAuthStore";
import Toaster from "./Components/common/Toaster/Toaster";

function App() {
	const { isAuthenticated } = useAuthStore();

	return (
		<>
			<BrowserRouter>
				<Routes>
					{/* Private Routes */}
					<Route path="/" element={isAuthenticated ? <Dashboard /> : <Navigate to="/sign-in" />} />
					<Route
						path="/transactions"
						element={isAuthenticated ? <Transactions /> : <Navigate to="/sign-in" />}
					/>
					<Route path="/reports" element={isAuthenticated ? <Reports /> : <Navigate to="/sign-in" />} />
					<Route path="/goals" element={isAuthenticated ? <Goals /> : <Navigate to="/sign-in" />} />
					<Route path="/budget" element={isAuthenticated ? <Budget /> : <Navigate to="/sign-in" />} />

					{/* Public Routes */}
					<Route path="/sign-up" element={!isAuthenticated ? <Signup /> : <Navigate to="/" />} />
					<Route path="/sign-in" element={!isAuthenticated ? <Signin /> : <Navigate to="/" />} />
					<Route
						path="/forgot-password"
						element={!isAuthenticated ? <ForgotPassword /> : <Navigate to="/" />}
					/>
					<Route
						path="/reset-password"
						element={!isAuthenticated ? <ResetPassword /> : <Navigate to="/" />}
					/>
					<Route path="/user-profile" element={isAuthenticated ? <UserProfile /> : <Navigate to="/sign-in" />} />
				</Routes>
				<Toaster />
			</BrowserRouter>
		</>
	);
}

export default App;
