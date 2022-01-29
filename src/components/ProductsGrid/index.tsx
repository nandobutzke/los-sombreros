import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Card } from "../Card";
import { ProductsContainer, TitleProductsdGridContainer } from "./styles";
import { Product } from '../../types';


export function ProductsGrid() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get<Product[]>('products');

            const data = response.data.map(product => product);

            setProducts(data);
        }

        loadProducts();
    }, [])

    return (
        <>
            <TitleProductsdGridContainer>
                <hr />
                <h2>Paletas Mexicanas</h2>
                <hr />
            </TitleProductsdGridContainer>
            <ProductsContainer>
                {products.map(product => { 
                    return(
                        <Card data={product} />
                    )
                })}
            </ProductsContainer>
        </>
    ); 
}