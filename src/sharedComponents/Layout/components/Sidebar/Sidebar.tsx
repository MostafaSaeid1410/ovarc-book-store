import styles from "./Sidebar.module.scss";
import appLogo from "../../../../assets/icons/appLogo.svg";

const Sidebar = () => {
    return (
        <aside className={styles["sidebar-container"]}>
            <div className={styles["sidebar-header"]}>
                <img src={appLogo} alt="logo" className={styles["app-logo"]} />
                <h1 className={styles["sidebar-title"]}>
                    <span className={styles["bold"]}>BOOK</span> WORLD
                </h1>
            </div>

            <div className={styles["sidebar-nav"]}>nav</div>
        </aside>
    );
};

export default Sidebar;
