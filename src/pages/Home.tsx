import { Content } from "../components/Content";
import { Header } from "../components/Header";
import { ProductsGrid } from "../components/ProductsGrid";

export function Home() {
    return(
        <>
            <Header />
            <Content />
            <ProductsGrid />
        </>
    );
}