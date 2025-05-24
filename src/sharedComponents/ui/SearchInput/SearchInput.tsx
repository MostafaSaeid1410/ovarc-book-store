import styles from "./SearchInput.module.scss";
import searchIcon from "../../../assets/icons/search.svg";

interface Props {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
}

const SearchInput = ({
    value,
    onChange,
    placeholder = "Search",
    className,
}: Props) => {
    return (
        <div className={`${styles["search-container"]} ${className || ""}`}>
            <img
                src={searchIcon}
                alt="Search"
                className={styles["search-icon"]}
            />
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={styles["search-input"]}
            />
        </div>
    );
};

export default SearchInput;
