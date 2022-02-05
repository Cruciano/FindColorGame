import React from 'react';
import cn from "classnames";
import styles from './modal.module.css';

const Modal = ({active, onClick, children}) => {
    return (
        <div className={cn(active && styles.activeModal, styles.modal)}
             onClick={onClick}>
            <div className={cn(active && styles.activeContent, styles.modal_content)}>
                {children}
            </div>
        </div>
    );
};

export default Modal;