import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface UserState {
    isAuth: boolean
    isLoading: boolean
    error: string | null
}

const initialState: UserState = {
    isAuth: false,
    isLoading: false,
    error: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuthLoad: (state) => {
            state.isLoading = true
        },
        setIsAuthErr: (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.isLoading = false
        },
        setIsAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
            state.isLoading = false
        }
    }
})
export const authSliceActions = authSlice.actions
export default authSlice.reducer