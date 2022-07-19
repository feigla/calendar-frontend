import React, {FC} from 'react';
import classes from "./EventColorBlock.module.css";

interface EventColorBlockProps {
    color: string
    setColor: React.Dispatch<any>
}

const EventColorBlock: FC<EventColorBlockProps> = ({color, setColor}) => {
    const colors = ['blue', 'green', 'red']
    return (
        <div className={classes.block__colors}>
            {colors.map(someColor =>
                <div
                    key={someColor}
                    style={{backgroundColor: someColor}}
                    className={[classes.block__color, color === someColor ? classes.block__choose : ''].join(' ')}
                    onClick={() => setColor(someColor)}
                >
                </div>
            )}
        </div>
    );
};

export default EventColorBlock;