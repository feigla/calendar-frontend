import React, {FC} from 'react';
import classes from './MyInput.module.css'

interface MyInputProps {
    [x: string]: any
}

const MyInput: FC<MyInputProps> = ({...rest}) => {
    return (
        <input  className={classes.myinput} {...rest} />
    );
};

export default MyInput;