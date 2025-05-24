import React from "react";
import styles from "./Button.module.scss";

type ButtonVariant = "primary" | "secondary" | "ternary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    prefixIcon?: React.ReactNode;
    suffixIcon?: React.ReactNode;
    iconOnly?: boolean;
    children?: React.ReactNode;
}

const Button = ({
    variant = "primary",
    prefixIcon,
    suffixIcon,
    iconOnly = false,
    children,
    className,
    ...props
}: ButtonProps) => {
    const buttonClasses = [
        styles["button-base"],
        styles[`button-${variant}`],
        iconOnly && styles["icon-only"],
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <button className={buttonClasses} {...props}>
            {prefixIcon && (
                <span
                    className={`${styles["button-icon"]} ${styles["icon-prefix"]}`}
                >
                    {prefixIcon}
                </span>
            )}
            {!iconOnly && children}
            {suffixIcon && (
                <span
                    className={`${styles["button-icon"]} ${styles["icon-suffix"]}`}
                >
                    {suffixIcon}
                </span>
            )}
        </button>
    );
};

export default Button;
