import { MainContainer } from "./styles";
import ovomaltineImg from '../../assets/img/ovomaltine.jpg';
import { Button } from "../Button";

export function Content() {
    return (
        <MainContainer>
            <div className="text-content">
                <h2>AS MELHORES PALETAS MEXICANAS</h2>
                <hr />
                <p>
                    Possuímos uma enorme variedade de paletas no nosso catálogo!
                    Clique no botão abaixo para saber mais!
                </p>
                <Button title="Ver Catálogo" />
            </div>
            <div className="img-content">
                <img src={ovomaltineImg} alt="" />
            </div>
        </MainContainer>
    );
}