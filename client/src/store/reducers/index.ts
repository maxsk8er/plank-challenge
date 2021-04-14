import { combineReducers } from 'redux'
import { notificationsReducer } from './notificationsReducer'

export const rootReducer = combineReducers({
	notifications: notificationsReducer
})

export type RootState = ReturnType<typeof rootReducer>