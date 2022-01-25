import { data } from "../../data";
import { Card } from "../Card";
import { ProductsContainer, TitleProductsdGridContainer } from "./styles";

export function ProductsGrid() {
    return (
        <>
            <TitleProductsdGridContainer>
                <h2>Paletas Mexicanas</h2>
            </TitleProductsdGridContainer>
            <ProductsContainer>
                {data.map(product => { 
                    return(
                        <Card data={product} />
                    )
                })}
            </ProductsContainer>
        </>
    ); 
}