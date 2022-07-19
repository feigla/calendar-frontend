import React, {FC} from 'react';
import classes from './CalendarNavigation.module.css'
import dayjs from "dayjs";
import {useActions} from "../../hooks/useActions";
import {useAppSelector} from "../../hooks/redux";

const CalendarNavigation: FC = () => {
    const {changedMonth} = useAppSelector(state => state.changedMonthReducer)
    const {setChangedMonth} = useActions()

    function changeMonthSubtract() {
        setChangedMonth(changedMonth - 1)
    }

    function changeMonthPlus() {
        setChangedMonth(changedMonth + 1)
    }

    return (
        <div className={classes.navigate}>
            <h2 className={classes.navigate__info}>
                {dayjs(new Date(dayjs().year(), changedMonth))
                    .format("MMMM YYYY")}
            </h2>
            <div className={classes.navigate__items}>
                <div
                    className={classes.today}
                    onClick={() => setChangedMonth(dayjs().month())}
                >
                    Today
                </div>
                <div className={classes.arrows}>
                    <i
                        className={[classes.arrow, classes.left].join(' ')}
                        onClick={changeMonthSubtract}>
                    </i>
                    <i
                        className={[classes.arrow, classes.right].join(' ')}
                        onClick={changeMonthPlus}>
                    </i>
                </div>
            </div>
        </div>
    );
};

export default CalendarNavigation;