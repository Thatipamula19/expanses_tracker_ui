import { Link } from "react-router-dom";
import classes from "./footer.module.css";

const Footer = () => {
	return (
		<footer className={classes?.footer}>
			<p className={classes?.footer_text}>&copy; 2025 FinTrack. All rights reserved.</p>

			<ul className={classes?.footer_links}>
				<li>
					<Link to="/privacy-policy" className={classes?.footer_link}>
						Privacy Policy
					</Link>
				</li>
				<li>
					<Link to="/terms-of-use" className={classes?.footer_link}>
						Terms of Use
					</Link>
				</li>
				<li>
					<Link to="/contact" className={classes?.footer_link}>
						Contact
					</Link>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
