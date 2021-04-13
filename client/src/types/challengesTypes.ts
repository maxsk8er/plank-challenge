export type ChallengeType = {
	id: string
	day: string
	isComplete:boolean
}

export type AppStateType = {
	challenges: ChallengeType[]
	loading: boolean
	error: null | string
	page: number
	hasMore: boolean
}
