export type * from "./auth";
export type * from "./navigation";
export type * from "./ui";

export interface Category {
    id: number;
    name: string;
    description?: string | null;
}

export interface Product {
    id: number;
    category_id?: number | null;
    name: string;
    description?: string | null;
    price: number;
    stock?: number | null;
    image?: string | null;
    is_active?: boolean | null;
    category?: Category | null;
}
