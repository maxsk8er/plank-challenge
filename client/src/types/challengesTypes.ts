
export type ChallengeDayType = {
	id: string
	isComplete: boolean
	nday: number
	date: Date
}

export type ChallengeType = {
	id: string
	days: ChallengeDayType[]
	isComplete: boolean
}

export type AppStateType = {
	id: string
	challenges: ChallengeType[]
	loading: boolean
	error: null | string
	page: number
	hasMore: boolean
}
