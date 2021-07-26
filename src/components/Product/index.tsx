import abacaxiImg from '../../assets/img/abacaxi.png';
import maracujaImg from '../../assets/img/maracujá.png';
import melanciaImg from '../../assets/img/melancia.png';

import { ProductContainer } from './styles';

export function Product() {
    return(
        <>
            <ProductContainer>
                <img src={abacaxiImg} alt="Paleta de abacaxi" />
                <div className="product-text-content">
                    <h3>R$ 6,00</h3>
                    <p>Paleta de abacaxi</p>
                </div>
            </ProductContainer>
            <ProductContainer>
                <img src={maracujaImg} alt="Paleta de maracujá" />
                <div className="product-text-content">
                    <h3>R$ 7,00</h3>
                    <p>Paleta de maracujá</p>
                </div>
            </ProductContainer>
            <ProductContainer>
                <img className="melanciaImg" src={melanciaImg} alt="Paleta de melancia" />
                <div className="product-text-content">
                    <h3>R$ 6,00</h3>
                    <p>Paleta de melancia</p>
                </div>
            </ProductContainer>
        </>
    );
}