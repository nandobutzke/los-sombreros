import { MainContainer } from "./styles";
import paletasImg from '../../assets/img/paletas.jpg';
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
            {/* <img src={paletasImg} alt="Paletas" /> */}
        </MainContainer>
    );
}