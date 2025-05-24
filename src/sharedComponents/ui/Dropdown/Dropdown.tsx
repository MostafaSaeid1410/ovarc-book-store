import React, { useState, useRef, useEffect } from "react";
import { ReactSVG } from "react-svg";
import styles from "./Dropdown.module.scss";
import dropDownArrow from "../../../assets/icons/dropDownArrow.svg";

export interface DropdownOption {
    label: string;
    value: string | number;
    disabled?: boolean;
}

interface DropdownProps {
    options: DropdownOption[];
    value?: string | number;
    onChange?: (value: string | number) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
    options,
    value,
    onChange,
    placeholder = "Select...",
    disabled = false,
    className,
}) => {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const selectedOption = options.find((opt) => opt.value === value);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    const handleSelect = (option: DropdownOption) => {
        if (!option.disabled && onChange) {
            onChange(option.value);
            setOpen(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (disabled) return;
        if (e.key === "Enter" || e.key === " ") {
            setOpen((prev) => !prev);
        } else if (e.key === "Escape") {
            setOpen(false);
        }
    };

    return (
        <div
            className={`${styles["dropdown-wrapper"]} ${className ?? ""}`}
            ref={wrapperRef}
            tabIndex={-1}
        >
            <div
                className={`${styles["dropdown-base"]} ${open ? styles["dropdown-open"] : ""} ${disabled ? styles["dropdown-disabled"] : ""}`}
                tabIndex={disabled ? -1 : 0}
                aria-haspopup="listbox"
                aria-expanded={open}
                onClick={() => !disabled && setOpen((prev) => !prev)}
                onKeyDown={handleKeyDown}
                role="button"
            >
                <span className={styles["dropdown-selected"]}>
                    {selectedOption ? (
                        selectedOption.label
                    ) : (
                        <span style={{ color: "#bfbfbf" }}>{placeholder}</span>
                    )}
                </span>
                <span className={styles["dropdown-suffix-icon"]}>
                    <ReactSVG src={dropDownArrow} />
                </span>
            </div>
            {open && (
                <div className={styles["dropdown-menu"]} role="listbox">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={`${styles["dropdown-option"]} ${option.disabled ? styles["dropdown-disabled"] : ""} ${option.value === value ? styles["dropdown-option-active"] : ""}`}
                            role="option"
                            aria-selected={option.value === value}
                            tabIndex={option.disabled ? -1 : 0}
                            onClick={() => handleSelect(option)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ")
                                    handleSelect(option);
                            }}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
