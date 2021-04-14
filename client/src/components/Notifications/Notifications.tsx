import Notification from './Notification';
import { useTypedSelector } from '../../hooks/useTypepSelector';
import './Notifications.scss'

const NotificationProvider = () => {
	const { notifications } = useTypedSelector(state => state.notifications)

	return (
		<div className='notification-wrapper'>
			{notifications.map((note) => {
				return <Notification key={note.id} note={note} />
			})}
		</div>
	);
};

export default NotificationProvider;