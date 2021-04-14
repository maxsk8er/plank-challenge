import { NotificationsAction, NotificationsActionTypes, NotificationType } from "../../types/notificationsTypes"

export function setNotification(note: NotificationType): NotificationsAction {
	return { type: NotificationsActionTypes.SET_NOTE, payload: note }
}
export function removeNotification(id: string): NotificationsAction {
	return { type: NotificationsActionTypes.REMOVE_NOTE, payload: id }
}

