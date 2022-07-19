import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IEvent} from "../../../types/IEvent";

export interface EventState {
    events: IEvent[]
    selectedEvent: IEvent | null
    isLoading: boolean
    error: string | null
}

const initialState: EventState = {
    events: [],
    selectedEvent: null,
    isLoading: false,
    error: null
}

export const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        setCreateEvent: (state, action: PayloadAction<IEvent>) => {
            state.events.push(action.payload)
        },
        setSelectedEvent: (state, action: PayloadAction<IEvent | null>) => {
            state.selectedEvent = action.payload
        },
        setUpgradeEvent: (state, action: PayloadAction<IEvent>) => {
            state.events = state.events.map(event => {
                if (event.id === action.payload.id) {
                    return action.payload
                }
                return event
            })
        },
        setDeleteEvent: (state, action: PayloadAction<IEvent>) => {
            state.events = state.events.filter(event => event.id !== action.payload.id)
        },
        setEventLoad: (state, action: PayloadAction) => {
            state.isLoading = true
        },
        setEventErr: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
        setEvents: (state, action: PayloadAction<IEvent[]>) => {
            state.events = action.payload
            state.isLoading = false
        }
    }
})
export const eventSliceActions = eventSlice.actions
export default eventSlice.reducer