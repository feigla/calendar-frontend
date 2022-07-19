import React, {FC} from 'react';
import './EventsItems.css'
import {useActions} from "../../../hooks/useActions";
import {IEvent} from "../../../types/IEvent";

interface EventsItemProps {
    event: IEvent
}

const EventsItem: FC<EventsItemProps> = ({event}) => {
    const {setSelectedEvent} = useActions()
    return (
        <div
            key={event.id}
            className='event'
            style={{backgroundColor: event.color}}
            onClick={() => setSelectedEvent(event)}
        >
            {event.title}
        </div>
    );
};

export default EventsItem;