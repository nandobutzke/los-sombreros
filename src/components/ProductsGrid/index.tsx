import { data } from "../../data";
import { Card } from "../Card";
import { ProductsContainer, TitleProductsdGridContainer } from "./styles";

export function ProductsGrid() {
    return (
        <>
            <TitleProductsdGridContainer>
                <hr />
                <h2>Paletas Mexicanas</h2>
                <hr />
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