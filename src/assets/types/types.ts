export interface User {
    id?: string;
    name: string;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface Film {
    id?: string;
    name: string;
    image: string;
    description: string;
    categoryId?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface Categories {
    id?: string;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface Favorites {
    id?: string;
    filmName: string;
    userId: string;
    favoritedAt?: Date;
}

export interface Perfil {
    id?: string
    nickname: string;
    userId: string;
    createdAt?: Date;
    updatedAt?: Date;
}