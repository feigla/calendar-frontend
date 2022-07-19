import {authSliceActions} from './reducers/auth/authSlice'
import {activeModalSliceActions} from './reducers/activeModal/activeModalSlice'
import {changedMonthSliceActions} from './reducers/changedMonth/changedMonthSlice'
import {selectedDaySliceActions} from './reducers/selectedDay/selectedDaySlice'
import {eventSliceActions} from './reducers/event/eventSlice'
import * as AuthActionCreators from "./reducers/auth/async-auth";
import * as EventActionCreators from "./reducers/event/async-event";


export default {
    ...authSliceActions,
    ...activeModalSliceActions,
    ...changedMonthSliceActions,
    ...selectedDaySliceActions,
    ...eventSliceActions,
    ...AuthActionCreators,
    ...EventActionCreators
}