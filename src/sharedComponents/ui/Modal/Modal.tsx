import { useState, useImperativeHandle, forwardRef } from "react";
import type { ReactNode } from "react";
import styles from "./Modal.module.scss";

export type ModalHandle = {
    open: () => void;
    close: () => void;
};

type Props = {
    children: ReactNode;
};

const ModalHeader = ({ children }: { children: ReactNode }) => (
    <div className={styles["modal-header"]}>{children}</div>
);
const ModalBody = ({ children }: { children: ReactNode }) => (
    <div className={styles["modal-body"]}>{children}</div>
);
const ModalFooter = ({ children }: { children: ReactNode }) => (
    <div className={styles["modal-footer"]}>{children}</div>
);

const Modal = forwardRef<ModalHandle, Props>(({ children }, ref) => {
    const [open, setOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        open: () => setOpen(true),
        close: () => setOpen(false),
    }));

    if (!open) return null;

    return (
        <div className={styles["modal-overlay"]}>
            <div className={styles["modal-box"]}>{children}</div>
        </div>
    );
});

Modal.displayName = "Modal";

(Modal as any).Header = ModalHeader;
(Modal as any).Body = ModalBody;
(Modal as any).Footer = ModalFooter;

export default Modal as typeof Modal & {
    Header: typeof ModalHeader;
    Body: typeof ModalBody;
    Footer: typeof ModalFooter;
};
