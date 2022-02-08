import { ContentContainer, MainContainer } from "./styles";
import { Button } from "../Button";
import paletasBannerImg from '../../assets/img/paletas-background.jpg';
import paletasImg from '../../assets/img/paletas-transparent.png';
import { FaIceCream } from "react-icons/fa";


export function Content() {
    return (
        <MainContainer>
            <ContentContainer>
                <div className="text-content">
                    <h2>As melhores paletas mexicanas!</h2>
                    <hr />
                    <p>
                        Possuímos uma enorme variedade de opções no nosso catálogo!
                    </p>
                    <Button icon={<FaIceCream />} title="Catálogo" />
                </div>
                <div className="img-content">
                    <img src={paletasImg} alt="Paletas" />
                </div>
            </ContentContainer>
            <img className="banner" src={paletasBannerImg} alt="Banner" />
        </MainContainer>
    );
}