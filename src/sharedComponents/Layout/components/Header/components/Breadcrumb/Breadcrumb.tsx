import { useLocation, Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import breadCrumpsArrow from "../../../../../../assets/icons/breadCrumpsArrow.svg";
import { navigationItems } from "../../../../components/Sidebar/navigationData";
import type { NavigationItem } from "../../../../components/Sidebar/navigationData";
import styles from "./Breadcrumb.module.scss";

const getNavLabel = (path: string) => {
    const nav = navigationItems.find(
        (item: NavigationItem) =>
            item.path.replace(/^\//, "") === path.replace(/^\//, ""),
    );
    return nav ? nav.label : path.charAt(0).toUpperCase() + path.slice(1);
};

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter(Boolean);

    const crumbs = [
        { label: "Admin", to: "/" },
        ...pathnames.map((value, idx) => {
            if (idx === 0) {
                return {
                    label: getNavLabel("/" + value),
                    to: `/${value}`,
                };
            }
            return {
                label: decodeURIComponent(value.replace(/-/g, " ")),
                to: `/${pathnames.slice(0, idx + 1).join("/")}`,
            };
        }),
    ];

    return (
        <nav className={styles.breadcrumb} aria-label="breadcrumb">
            {crumbs.map((crumb, idx) => (
                <span key={crumb.to} className={styles.crumb}>
                    {idx > 0 && (
                        <ReactSVG
                            src={breadCrumpsArrow}
                            className={styles.arrow}
                        />
                    )}
                    {idx < crumbs.length - 1 ? (
                        <Link to={crumb.to} className={styles.link}>
                            {crumb.label}
                        </Link>
                    ) : (
                        <span className={styles.current}>{crumb.label}</span>
                    )}
                </span>
            ))}
        </nav>
    );
};

export default Breadcrumb;
