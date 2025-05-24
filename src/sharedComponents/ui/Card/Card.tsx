import styles from "./Card.module.scss";

type Props = {
    children?: React.ReactNode;
    variant?: "primary" | "secondary";
};

const Card = ({ children, variant = "primary" }: Props) => {
    return (
        <div className={`${styles["card-base"]} ${styles[`card-${variant}`]}`}>
            {children}
        </div>
    );
};

export default Card;
