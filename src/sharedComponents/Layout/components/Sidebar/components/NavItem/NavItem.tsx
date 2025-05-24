import type { FC } from "react";
import { NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";
import styles from "./NavItem.module.scss";

interface NavItemProps {
    path: string;
    icon: string;
    label: string;
}

const NavItem: FC<NavItemProps> = ({ path, icon, label }) => {
    return (
        <NavLink
            to={path}
            className={({ isActive }) =>
                `${styles["nav-item"]} ${isActive ? styles["active"] : ""}`
            }
        >
            <div className={styles["nav-icon"]}>
                <ReactSVG src={icon} wrapper="svg" />
            </div>
            <span className={styles["nav-label"]}>{label}</span>
        </NavLink>
    );
};

export default NavItem;
