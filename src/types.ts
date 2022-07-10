export interface IProduct {
    id: number;
    images: string[];
    price: string;
    title: string;
}
export type IProducts = IProduct[];
export interface ICategory {
    id: number;
    name: string;
    image: string;
}
export type ICategories = ICategory[];
