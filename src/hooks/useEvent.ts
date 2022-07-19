import {useEffect, useState} from "react";
import {IEvent} from "../types/IEvent";

export const useEvent = (selectedEvent: IEvent | null) => {
    const [titleValue, setTitleValue] = useState<string>('')
    const [descValue, setDescValue] = useState<string>('')
    const [color, setColor] = useState<string>('green')

    useEffect(() => {
        setDescValue(
            selectedEvent
                ? selectedEvent.description
                : '')
        setTitleValue(
            selectedEvent
                ? selectedEvent.title
                : '')
        setColor(
            selectedEvent
                ? selectedEvent.color
                : 'green')
    }, [selectedEvent])

    return [
        titleValue,
        descValue,
        color,
        setTitleValue,
        setColor,
        setDescValue] as const
}