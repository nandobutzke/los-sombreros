import { AddToCartButton, ProductContainer } from './styles';
import { formatPrice } from '../../util/format';
import { MdAddShoppingCart } from 'react-icons/md';
import { useState } from 'react';

interface ProductProps {
    data: {
        id: string;
        title: string;
        price: number;
        img: string;
        quantityOrder: number
    }
}

export function Card({ data }: ProductProps) {
    const [quantityProduct, setQuantityProduct] = useState(0);

    function handleAddProductAtCart() {
        setQuantityProduct(quantityProduct + 1);
    }

    return(
        <ProductContainer key={data.id}>
            <div className="card-content">
                <img className={data.id === "melancia" ? "melanciaImg" : ''} src={data.img} alt={data.title} />
                <div className="data-text-content">
                    <h3>{formatPrice(data.price)}</h3>
                    <p>{data.title}</p>
                </div>
            </div>
            <AddToCartButton type="button" onClick={() => handleAddProductAtCart()}>
                <div>
                    <MdAddShoppingCart />
                    {quantityProduct}
                </div>

                <span>ADICIONAR AO CARRINHO</span>
            </AddToCartButton>
        </ProductContainer>
    );
}