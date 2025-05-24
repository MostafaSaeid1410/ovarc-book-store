import styles from "./Sidebar.module.scss";
import appLogo from "../../../../assets/icons/appLogo.svg";
import NavItem from "./components/NavItem/NavItem";
import { navigationItems } from "./navigationData";

const Sidebar = () => {
    return (
        <aside className={styles["sidebar-container"]}>
            <div className={styles["sidebar-header"]}>
                <img src={appLogo} alt="logo" className={styles["app-logo"]} />
                <h1 className={styles["sidebar-title"]}>
                    <span className={styles["bold"]}>BOOK</span> WORLD
                </h1>
            </div>

            <nav className={styles["sidebar-nav"]}>
                {navigationItems.map((item) => (
                    <NavItem
                        key={item.path}
                        path={item.path}
                        icon={item.icon}
                        label={item.label}
                    />
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
