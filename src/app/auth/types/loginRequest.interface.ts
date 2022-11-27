export interface LoginRequestInterface {
  user: {
    email: string
    password: string
    fullName: string // Нужно для токена
  }
}
