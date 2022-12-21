export interface IFeedback {
    user: {
        fullName: string
        status: string
    }
    text?: string
    rating: number
    date: string
}