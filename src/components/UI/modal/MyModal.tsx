import React, {FC} from 'react';
import classes from './MyModal.module.css'
import {useAppSelector} from "../../../hooks/redux";

interface MyModalProps {
    children: React.ReactNode
}

const MyModal: FC<MyModalProps> = ({children}) => {
    const {activeModal} = useAppSelector(state => state.activeModalReducer)

    return (
        <div className={[classes.modal, activeModal ? classes.active : ''].join(' ')}>
            <div className={[classes.modal__content, activeModal ? classes.active : ''].join(' ')}
                 onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;