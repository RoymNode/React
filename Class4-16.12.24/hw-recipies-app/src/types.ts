export type NavItem = {
    displayStr: string;
    hrefStr: string;
}

export type Category = {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string
}

export type Meal = {
    meals: [{
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
}]
}