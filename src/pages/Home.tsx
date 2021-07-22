import { Content } from "../components/Content";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";

export function Home() {
    return(
        <>
            <SideBar />
            <Header />
            <Content />
        </>
    );
}