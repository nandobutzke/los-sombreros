import { MainContainer } from "./styles";
import { Button } from "../Button";
import paletasImg from '../../assets/img/paletas-background.jpg';

export function Content() {
    return (
        <MainContainer>
            <div className="text-content">
                <h2>As melhores paletas mexicanas!</h2>
                <hr />
                <p>
                    Possuímos uma enorme variedade de opções no nosso catálogo!
                </p>
                <Button title="Catálogo" />
            </div>
            <img src={paletasImg} alt="Paletas" />
        </MainContainer>
    );
}