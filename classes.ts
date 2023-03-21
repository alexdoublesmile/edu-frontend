class User {
    name: string
    id: string
    email: string
}

type UserKeys1 = Exclude<keyof User, "name" | "email">
type UserKeys2 = Pick<User, "id">



function reverse<T>(array: T[]): T[] {
    return array.reverse();
}