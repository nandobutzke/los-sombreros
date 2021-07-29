import { data } from "../../data";
import { Product } from "../Product";
import { ProductsContainer } from "./styles";

export function ProductsGrid() {
    return (
        <ProductsContainer>
            {data.map(product => { 
                return(
                    <Product product={product} />
                )
            })}
        </ProductsContainer>
    ); 
}