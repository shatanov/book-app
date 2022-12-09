export interface IUser {
    id: number
    email: string
    password: string
    fullName: string
    image: string | null
    token: string
}