export interface IFeedback {
    user: {
        name: string
        status: string
    }
    text?: string
    rating: number
    date: string
}