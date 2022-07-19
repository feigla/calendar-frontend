import {useAppDispatch} from "./redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import actions from './../store/actions'

export const useActions = () => {
    const dispatch = useAppDispatch()
    return bindActionCreators(actions, dispatch)
}