import type { InputHTMLAttributes, ReactNode } from "react";
import styles from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    suffixIcon?: ReactNode;
}

const Input = ({
    label,
    error,
    className,
    suffixIcon,
    ...props
}: InputProps) => {
    return (
        <div className={styles["input-wrapper"]}>
            {label && <label className={styles["input-label"]}>{label}</label>}
            <div style={{ position: "relative" }}>
                <input
                    className={`${styles["input-base"]} ${className ?? ""}`}
                    style={suffixIcon ? { paddingRight: "60px" } : undefined}
                    {...props}
                />
                {suffixIcon && (
                    <div className={styles["input-suffix-container"]}>
                        <div className={styles["input-suffix-icon"]}>
                            {suffixIcon}
                        </div>
                    </div>
                )}
            </div>
            {error && <span className={styles["input-error"]}>{error}</span>}
        </div>
    );
};

export default Input;
