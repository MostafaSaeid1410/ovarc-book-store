import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import styles from "./Layout.module.scss";

const Layout = () => {
    return (
        <div className={styles["layout-container"]}>
            <Sidebar />
            <div className={styles["main-container"]}>
                <Header />
                <Main>
                    <div>
                        <Outlet />
                    </div>
                </Main>
            </div>
        </div>
    );
};

export default Layout;
