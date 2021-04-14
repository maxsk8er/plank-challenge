import React from 'react'
import { v4 as uuid } from 'uuid'
import { ChallengeDayType } from '../types/challengesTypes'
import moment from 'moment'
import { useActions } from '../hooks/useActions'
import { setLocalStorage } from '../utils/localStorage'

const HomePage = () => {
	const { setNotification } = useActions()
	const handleStartChallenge = () => {
		const days: ChallengeDayType[] = Array(30).fill(null).map((e, i) => {
			return {
				id: uuid(),
				isComplete: false,
				nday: i + 1,
				date: moment().add(1 * i, 'day').format('YYYY-MM-DD'),
				goal: 20,
				result: null
			}
		})
		setLocalStorage('currentChallenge', days)
		setNotification({
			message: `new challenge`
		})
	}
	const [isTimer, setIsTimer] = React.useState(false)
	const [timer, setTimer] = React.useState(0)
	React.useEffect(() => {
		let idInterval: any = null
		if (isTimer) {
			idInterval = setInterval(() => {
				setTimer(prev => {
					if (prev < 20) {
						return prev + 1
					}
					clearInterval(idInterval)
					return prev
				})
			}, 1000)
		} else {
			setTimer(0)
			clearInterval(idInterval)
		}
		return () => clearInterval(idInterval)
	}, [isTimer])
	const handleStartTimer = () => {
		setNotification({
			message: `${!isTimer ? 'start' : 'stop'} plank`
		})
		setIsTimer(!isTimer)
	}


	return (
		<div>
			<button onClick={handleStartChallenge}>Start a new challenge</button>
			<h1>Timer: {timer}</h1>
			<button onClick={handleStartTimer}>Start</button>
		</div>
	)
}

export default HomePage