import classes from "./profileSettings.module.css";
const notifications = [
    { id: 'budget', label: 'Budget Limit Alerts', checked: true },
    { id: 'goals', label: 'Goal Reminders', checked: true },
    { id: 'weekly', label: 'Weekly Summary Emails', checked: true },
]
const ProfileSettings = () => {
    return (
        <>
            <div className={`${classes?.profile_settings_card}`}>
                <div className={`${classes?.profile_settings_body}`}>
                    <div className={`${classes?.profile_row}`}>
                    <span className={`${classes?.row_label}`}>Preferred Currency:</span>
                    <span className={`${classes?.row_value}`}>INR (₹)</span>
                </div>
                <div className={`${classes?.profile_row}`}>
                    <span className={`${classes?.row_label}`}>Language:</span>
                    <span className={`${classes?.row_value}`}>English (EN)</span>
                </div>
                <div className={`${classes?.profile_row}`}>
                    <span className={`${classes?.row_label}`}>Monthly Start Date:</span>
                    <span className={`${classes?.row_value}`}>1st of every month</span>
                </div>
                <div className={`${classes?.profile_row}`}>
                    <span className={`${classes?.row_label}`}>Notifications Preferences:</span>
                    <div className={classes?.checkbox_list}>
                        {notifications.map((n) => (
                            <label key={n.id} className={classes?.checkbox_item}>
                                <input
                                    type="checkbox"
                                    defaultChecked={n.checked}
                                />
                                {n.label}
                            </label>
                        ))}
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default ProfileSettings