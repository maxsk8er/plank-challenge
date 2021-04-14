import React from 'react';
import { useActions } from '../../hooks/useActions';
import { NotificationType } from "../../types/notificationsTypes"
import ReactHtmlParser from 'html-react-parser';

const Notification = ({ note }: { note: NotificationType }) => {
	const { id, message, type } = note
	const { removeNotification } = useActions()

	const [exit, setExit] = React.useState(false)
	const [width, setWidth] = React.useState(0)
	const [intervalId, setIntervalId] = React.useState<any>()

	const handleStartTimer = () => {
		const idInterval = setInterval(() => {
			setWidth((prev) => {
				if (prev < 100) {
					return prev + .5
				}
				clearInterval(idInterval)
				return prev
			})
		}, 20)
		setIntervalId(idInterval)
	}

	const handlePauseTimer = () => {
		clearInterval(intervalId)
	}

	const handleCloseNotification = () => {
		handlePauseTimer()
		setExit(true)
		setTimeout(() => {
			id && removeNotification(id)
		}, 400);
	}

	React.useEffect(() => {
		if (width === 100) {
			handleCloseNotification()
		}
	}, [width])

	React.useEffect(() => {
		handleStartTimer()
	}, [])

	return (
		<div
			onMouseEnter={handlePauseTimer}
			onMouseLeave={handleStartTimer}
			className={`notification-item 
				${type === "SUCCESS" ? "success" : "error"} 
				${exit ? "exit" : ""}`}>
			<p>{ReactHtmlParser(message?message:'')}</p>
			<button onClick={() => setExit(true)}>Exit</button>
			<div className='bar' style={{ width: `${width}%` }} />
		</div>
	);
};

export default Notification;