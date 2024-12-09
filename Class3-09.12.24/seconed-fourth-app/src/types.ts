export type Person = {
    name: {
        first: string,
        last: string
    }
    email: string,
    picture: {
        large: string
    }
    login: {
        uuid: string
    }
}

export type Caterory = {
    idCategory: string;
    strCategory: string
}