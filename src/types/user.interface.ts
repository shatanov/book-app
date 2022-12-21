export interface IUser {
    id?: number
    email: string
    password: string
    fullName?: string
    status?: string
    image: string | null
}