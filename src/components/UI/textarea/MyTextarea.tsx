import React, {FC} from 'react';
import classes from './MyTextarea.module.css'

interface MyTextareaProps {
    [x: string]: any
}

const MyTextarea: FC<MyTextareaProps> = (rest) => {
    return (
        <textarea className={classes.textarea} {...rest} />
    );
};

export default MyTextarea;