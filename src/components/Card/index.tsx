import { ProductContainer } from './styles';
import { formatPrice } from '../../util/format';

interface ProductProps { 
    data: {
        id: string;
        title: string;
        price: number;
        img: string;
    }
}

export function Card({ data }: ProductProps) {
    return(
        <ProductContainer key={data.id}>
            <img className={data.id === "melancia" ? "melanciaImg" : ''} src={data.img} alt={data.title} />
            <div className="data-text-content">
                <h3>{formatPrice(data.price)}</h3>
                <p>{data.title}</p>
            </div>
        </ProductContainer>
    );
}