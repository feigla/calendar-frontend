import {IEvent} from "../types/IEvent";


export const getEventForChange = (
    titleValue: string,
    color: string,
    selectedEvent: IEvent | null,
    date: string,
    descValue: string
) => {
    const event: IEvent = {
        title: titleValue,
        color,
        id: selectedEvent ? selectedEvent.id : undefined,
        date,
        description: descValue,
    }
    return event
}