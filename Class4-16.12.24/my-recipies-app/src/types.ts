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
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string
}


export type Recipy = {
    strMeal: string;
    strDrinkAlternate?: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
}