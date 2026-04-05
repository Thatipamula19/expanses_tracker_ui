import AppConstants from "@/utils/AppConstants";
import classes from "./pageTitleCTA.module.css";
const PageTitleCTA = ({
	pageTitle,
	pageSubtitle,

	buttonName,
	icon,
	ctaHandler,
}: {
	pageTitle: string;
	pageSubtitle?: string;
	buttonName: string;
	icon: boolean;
	ctaHandler: () => void;
}) => {
	return (
		<section className={classes?.page_cta}>
			<div>
				<h1 className={classes?.page_title}>{pageTitle}</h1>
				{pageSubtitle && <span className={classes?.page_subtitle}>{pageSubtitle}</span>}
			</div>
			<button className={classes?.cta_button} onClick={ctaHandler}>
				{icon && <img src={AppConstants.common.plus} alt="plus icon" className={classes?.cta_button_icon} />}
				{buttonName}
			</button>
		</section>
	);
};

export default PageTitleCTA;
