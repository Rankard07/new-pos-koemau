import { Category, Product } from "@/types";
import { useState } from "react";

interface Props {
    products: Product[];
    categories: Category[];
}

export default function ProductIndex({ products, categories }: Props) {
    const [showForm, setShowForm] = useState(false);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);

    function handleEditProduct(product: Product) {
        setEditingProduct(product);
        setShowForm(true);
    }
}
