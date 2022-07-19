import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface ActiveModalState {
    activeModal: boolean
}

const initialState: ActiveModalState = {
    activeModal: false
}

export const activeModalSlice = createSlice({
    name: 'activeModal',
    initialState,
    reducers: {
        setActiveModal: (state, action: PayloadAction<boolean>) => {
            state.activeModal = action.payload
        }
    }
})
export const activeModalSliceActions = activeModalSlice.actions
export default activeModalSlice.reducer