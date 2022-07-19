import React, {FC} from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import dayjs from "dayjs";
import {IEvent} from "../../../types/IEvent";
import EventsItem from "../EventsItem/EventsItem";
import classes from "./EventsList.module.css";

interface EventListProps {
    day: dayjs.Dayjs
    events: IEvent[]
}

const EventsList: FC<EventListProps> = ({day, events}) => {
    return (
        <>
            <TransitionGroup className={classes.day__events}>
                {events.map(event =>
                    dayjs(event.date).format('DD-MM-YYYY') === day.format('DD-MM-YYYY') &&
                    <CSSTransition
                        key={event.id}
                        timeout={500}
                        classNames='event'
                    >
                        <EventsItem event={event}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </>
    );
};

export default EventsList;