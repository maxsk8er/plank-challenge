import React from 'react'
import { v4 as uuid } from 'uuid';
import { ChallengeDayType } from '../types/challengesTypes';

const HomePage = () => {

	const handleStartChallenge = () => {
		const today = new Date()
		const day = 86400000;
		const days: ChallengeDayType[] = Array(30).fill(null).map((e, i) => {
			return {
				id: uuid(),
				isComplete: false,
				nday: i+1,
				date: new Date(today.getTime() + day * i),
			}
		})
		console.log(days)
	}

	return (
		<div>
			<button onClick={handleStartChallenge}>Start a new challenge</button>
		</div>
	)
}

export default HomePage