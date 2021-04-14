export enum NotificationActionTypes {
	SUCCESS = 'SUCCESS',
	ERROR = 'ERROR'
}

export type NotificationType = {
	id?: string | undefined
	type?: NotificationActionTypes | undefined
	message: string | undefined
}

export type NotificationsState = {
	notifications: NotificationType[]
}

export enum NotificationsActionTypes {
	SET_NOTE = 'SET_NOTE',
	REMOVE_NOTE = 'REMOVE_NOTE'
}

interface SetNoteAction {
	type: NotificationsActionTypes.SET_NOTE
	payload: NotificationType
}

interface RemoveNoteAction {
	type: NotificationsActionTypes.REMOVE_NOTE
	payload: string
}

export type NotificationsAction = SetNoteAction | RemoveNoteAction