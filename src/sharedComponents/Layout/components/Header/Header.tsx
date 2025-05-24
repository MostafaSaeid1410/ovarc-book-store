import styles from "./Header.module.scss";
import userAvatar from "../../../../assets/imgs/userExample.png";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";

const Header = () => {
    return (
        <header className={styles["header-container"]}>
            <div className={styles["header-title"]}>
                <div className={styles["title"]}>Shop</div>
                <Breadcrumb />
            </div>
            <div className={styles["header-avatar"]}>
                <img
                    src={userAvatar}
                    alt="avatar"
                    className={styles["avatar-img"]}
                />
                <div className={styles["avatar-name"]}>Jacob Jones</div>
            </div>
        </header>
    );
};

export default Header;
