import React, {FC} from 'react';
import {Dayjs} from "dayjs";
import classes from './Week.module.css'
import Day from "../Day/Day";

interface dayProps {
    row: (Dayjs | undefined)[]
}

const Week: FC<dayProps> = ({row}) => {
    return (
        <>
            {row.map((day, ind) =>
                day
                    ?
                    <React.Fragment key={ind}>
                        <Day day={day}/>
                    </React.Fragment>
                    :
                    <div className={classes.empty__day} key={ind}></div>
            )}
        </>
    );
};

export default Week;