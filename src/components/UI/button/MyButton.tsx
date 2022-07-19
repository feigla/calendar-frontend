import React, {FC} from 'react';
import classes from './MyButton.module.css'

interface MyButtonProps {
    [x: string]: any
    children: React.ReactNode
}

const MyButton: FC<MyButtonProps> = ({ children, ...rest}) => {
    return (
        <button className={classes.mybutton} {...rest}>
            {children}
        </button>
    );
};

export default MyButton;