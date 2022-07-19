import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import dayjs from "dayjs";

export interface ChangedMonthState {
    changedMonth: number
}

const initialState: ChangedMonthState = {
    changedMonth: dayjs().month()
}

export const changedMonthSlice = createSlice({
    name: 'changedMonth',
    initialState,
    reducers: {
        setChangedMonth: (state, action: PayloadAction<number>) => {
            state.changedMonth = action.payload
        }
    }
})
export const changedMonthSliceActions = changedMonthSlice.actions
export default changedMonthSlice.reducer