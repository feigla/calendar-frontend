import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import dayjs from "dayjs";

export interface SelectedState {
    selectedDay: dayjs.Dayjs
}

const initialState: SelectedState = {
    selectedDay: dayjs()
}

export const selectedDaySlice = createSlice({
    name: 'selectedDay',
    initialState,
    reducers: {
        setSelectedDay: (state, action: PayloadAction<dayjs.Dayjs>) => {
            state.selectedDay = action.payload
        }
    }
})
export const selectedDaySliceActions = selectedDaySlice.actions
export default selectedDaySlice.reducer