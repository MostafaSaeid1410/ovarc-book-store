import React, { useState } from "react";
import styles from "./Tabs.module.scss";

interface TabItem {
    title: string;
    component: React.ReactNode;
}

interface TabsProps {
    tabs: TabItem[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={styles["tabs-container"]}>
            <div className={styles["tabs-headers"]}>
                {tabs.map((tab, idx) => (
                    <div
                        key={tab.title}
                        className={
                            idx === activeIndex
                                ? `${styles["tab-header"]} ${styles["tab-header-active"]}`
                                : styles["tab-header"]
                        }
                        onClick={() => setActiveIndex(idx)}
                    >
                        {tab.title}
                        {idx === activeIndex && (
                            <div className={styles["tab-underline"]} />
                        )}
                    </div>
                ))}
            </div>
            <div className={styles["tab-content"]}>
                {tabs[activeIndex].component}
            </div>
        </div>
    );
};

export default Tabs;
