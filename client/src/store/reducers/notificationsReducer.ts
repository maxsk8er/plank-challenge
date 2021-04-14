import { NotificationsAction, NotificationsActionTypes, NotificationType, NotificationsState, NotificationActionTypes } from "../../types/notificationsTypes"
import { v4 as uuid } from 'uuid';
const inNotificationsState: NotificationsState = {
	notifications: []
}

export const notificationsReducer = (state = inNotificationsState, action: NotificationsAction) => {
	switch (action.type) {
		case NotificationsActionTypes.SET_NOTE:
			const newNote: NotificationType = { ...action.payload, id: uuid(), type: NotificationActionTypes.SUCCESS }
			return { ...state, notifications: [...state.notifications, newNote] }
		case NotificationsActionTypes.REMOVE_NOTE:
			return { ...state, notifications: state.notifications.filter(el => el.id !== action.payload) }
		default:
			return state
	}
}
