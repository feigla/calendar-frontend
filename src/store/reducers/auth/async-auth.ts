import {AppDispatch} from "../../store";
import AuthService from "../../../api/services/AuthService";
import {authSliceActions} from "./authSlice";
import axios from "axios";
import {ITokens} from "../../../types/ITokens";
import {API_URL} from "../../../api/http";

export const login = (name: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(authSliceActions.setIsAuthLoad())
        const response = await AuthService.login(name, password)
        localStorage.setItem('token', response.data.accessToken)
        dispatch(authSliceActions.setIsAuth(true))
    } catch (e: any) {
        dispatch(authSliceActions.setIsAuthErr(e.message))
    }
}

export const registration = (name: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(authSliceActions.setIsAuthLoad())
        const response = await AuthService.registration(name, password)
        localStorage.setItem('token', response.data.accessToken)
        dispatch(authSliceActions.setIsAuth(true))
    } catch (e: any) {
        dispatch(authSliceActions.setIsAuthErr(e.message))
    }
}

export const logout = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(authSliceActions.setIsAuthLoad())
        const response = await AuthService.logout()
        localStorage.removeItem('token')
        dispatch(authSliceActions.setIsAuth(false))
    } catch (e: any) {
        dispatch(authSliceActions.setIsAuthErr(e.message))
    }
}

export const checkAuth = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(authSliceActions.setIsAuthLoad())
        const response = await axios.get<ITokens>(`${API_URL}/auth/refresh`, {withCredentials: true})
        localStorage.setItem('token', response.data.accessToken)
        dispatch(authSliceActions.setIsAuth(true))
    } catch (e: any) {
        dispatch(authSliceActions.setIsAuthErr(e.message))
    }
}