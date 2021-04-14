
export type ChallengeDayType = {
	id: string
	isComplete: boolean
	nday: number
	date: string
	goal: number
	result: number | null
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
