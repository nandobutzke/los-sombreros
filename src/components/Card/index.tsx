import { AddToCartButton, ProductContainer } from './styles';
import { formatPrice } from '../../util/format';
import { MdAddShoppingCart } from 'react-icons/md';
import { localData } from "../../data";
import { useState } from 'react';
import { useCart } from '../../hooks/useCart';

interface ProductProps {
    data: {
        id: number;
        title: string;
        price: number;
    };
}

export function Card({ data }: ProductProps) {
    const { addProduct } = useCart();
    const [quantityProduct, setQuantityProduct] = useState(0);
    
    function getImageById(localDataItemId: number) {
        const response = localData.findIndex(localDataItem => localDataItem.id === data.id);
        
        return localData[response].image;
    }
    
    function handleAddProduct(productId: number) {
        addProduct(productId)
        setQuantityProduct(quantityProduct + 1);
    }

    

    return(
        <ProductContainer key={data.id}>
            <div className="card-content">
                <img className={data.id === 3 ? "melanciaImg" : ''} src={getImageById(data.id)} alt={data.title} />
                <div className="data-text-content">
                    <h3>{formatPrice(data.price)}</h3>
                    <p>{data.title}</p>
                </div>
            </div>
            <AddToCartButton type="button" onClick={() => handleAddProduct(data.id)}>
                <div>
                    <MdAddShoppingCart />
                    {quantityProduct}
                </div>

                <span>ADICIONAR AO CARRINHO</span>
            </AddToCartButton>
        </ProductContainer>
    );
}