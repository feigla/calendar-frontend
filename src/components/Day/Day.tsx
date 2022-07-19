import React, {FC} from 'react';
import classes from "./Day.module.css";
import dayjs from "dayjs";
import EventsList from "../Events/EventsList/EventsList";
import {useActions} from "../../hooks/useActions";
import {useAppSelector} from "../../hooks/redux";

interface DayProps {
    day: dayjs.Dayjs
}

const Day: FC<DayProps> = ({day}) => {
    const {setActiveModal, setSelectedDay} = useActions()

    const {events} = useAppSelector(state => state.eventReducer)

    const setModalVerb = (day: dayjs.Dayjs) => {
        setActiveModal(true)
        setSelectedDay(day)
    }

    return (
        <div className={classes.day} onClick={() => setModalVerb(day)}>
                <span
                    className={[
                        dayjs().format('DD-MM-YYYY') === day.format('DD-MM-YYYY')
                            ? classes.current__day
                            : '',
                        classes.day__item].join(' ')}>
                            {day.format('DD')}
                        </span>
            <EventsList day={day} events={events}/>
        </div>
    );
};

export default Day;