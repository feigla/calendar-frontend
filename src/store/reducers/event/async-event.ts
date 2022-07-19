import {AppDispatch} from "../../store";
import EventService from "../../../api/services/EventService";
import {eventSliceActions} from "./eventSlice";
import {IEvent} from "../../../types/IEvent";


export const fetchEvents = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(eventSliceActions.setEventLoad())
        const response = await EventService.getUserEvents()
        dispatch(eventSliceActions.setEvents(response.data))
    } catch (e: any) {
        dispatch(eventSliceActions.setEventErr(e.message))
    }
}

export const createEvent = (event: IEvent) => async (dispatch: AppDispatch) => {
    const response = await EventService.createEvent(event.title, event.description, event.color, event.date as string)
    dispatch(eventSliceActions.setCreateEvent(response.data))
}

export const updateEvent = (event: IEvent) => async (dispatch: AppDispatch) => {
    await EventService.updateEvent(event.title, event.description, event.color, event.id as number)
    dispatch(eventSliceActions.setUpgradeEvent(event))
}

export const deleteEvent = (event: IEvent) => async (dispatch: AppDispatch) => {
    await EventService.deleteEvent(event.id as number)
    dispatch(eventSliceActions.setDeleteEvent(event))
}