import authReducer from './reducers/auth/authSlice'
import changedMonthReducer from './reducers/changedMonth/changedMonthSlice'
import activeModalReducer from './reducers/activeModal/activeModalSlice'
import selectedDayReducer from './reducers/selectedDay/selectedDaySlice'
import eventReducer from './reducers/event/eventSlice'

export const reducers = {
    authReducer,
    changedMonthReducer,
    activeModalReducer,
    selectedDayReducer,
    eventReducer
}