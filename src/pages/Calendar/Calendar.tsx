import React, {FC, useEffect, useState} from 'react';
import classes from './Calendar.module.css'
import {getMonth} from "../../utils/getMonth";
import Month from "../../components/Month/Month";
import CalendarNavigation from "../../components/CalendarNavigation/CalendarNavigation";
import {useAppSelector} from "../../hooks/redux";
import MyModal from "../../components/UI/modal/MyModal";
import EventsForm from "../../components/Events/EventsForm/EventsForm";
import {getDaysOfWeek} from "../../utils/getDaysOfWeek";
import {useActions} from "../../hooks/useActions";

const Calendar: FC = () => {
    const {isLoading, error} = useAppSelector(state => state.eventReducer)
    const {changedMonth} = useAppSelector(state => state.changedMonthReducer)
    const [currentMonth, setCurrentMonth] = useState(getMonth())

    const {fetchEvents} = useActions()

    useEffect(() => {
        setCurrentMonth(getMonth(changedMonth));
    }, [changedMonth]);

    useEffect(() => {
        fetchEvents()
    }, [])

    if (isLoading) {
        return <div>loading</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div className={classes.calendar}>
            <MyModal>
                <EventsForm/>
            </MyModal>
            <CalendarNavigation/>
            <div className={classes.calendar__items}>
                <div className={classes.week}>
                    {getDaysOfWeek().map((dayOfWeek, index) =>
                        <div className={classes.week__day} key={index}>{dayOfWeek}</div>
                    )}
                </div>
                <div className={classes.calendar__days}>
                    <Month currentMonth={currentMonth}/>
                </div>
            </div>
        </div>
    );
};

export default Calendar;