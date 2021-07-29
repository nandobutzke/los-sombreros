import { ProductContainer } from './styles';
import { formatPrice } from '../../util/format';

interface ProductProps { 
    product: {
        id: string;
        title: string;
        price: number;
        img: string;
    }
}

export function Product({ product }: ProductProps) {
    return(
        <ProductContainer key={product.id}>
            <img className={product.id === "melancia" ? "melanciaImg" : ''} src={product.img} alt={product.title} />
            <div className="product-text-content">
                <h3>{formatPrice(product.price)}</h3>
                <p>{product.title}</p>
            </div>
        </ProductContainer>
    );
}