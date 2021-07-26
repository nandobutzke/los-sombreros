import { Content } from "../components/Content";
import { Header } from "../components/Header";
import { ProductsGrid } from "../components/ProductsGrid";
import { SideBar } from "../components/SideBar";

export function Home() {
    return(
        <>
            <SideBar />
            <Header />
            <Content />
            <ProductsGrid />
        </>
    );
}