import { AddToCartButton, ProductContainer } from './styles';
import { formatPrice } from '../../util/format';
import { MdAddShoppingCart } from 'react-icons/md';
import { localData } from "../../data";
import { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { Product } from '../../types';
import { toast } from 'react-toastify';

interface CarItensAmount {
    [key: number]: number;
}

export function Card(product: Product) {
    const { addProduct, cart } = useCart();

    const cartItensAmount = cart.reduce((sumAmount, product) => {
        const newSumAmount = {...sumAmount};
        newSumAmount[product.id] = product.amount;

        return newSumAmount;
    }, {} as CarItensAmount);
    
    function getImageById(localDataItemId: number) {
        const response = localData.findIndex(localDataItem => localDataItem.id === product.id);
        
        return localData[response].image;
    }
    
    function handleAddProduct(product: Product) {
        addProduct(product.id);
    }

    return(
        <ProductContainer key={product.id}>
            <div className="card-content">
                <img className={product.id === 3 ? "melanciaImg" : ''} src={getImageById(product.id)} alt={product.title} />
                <div className="data-text-content">
                    <h3>{formatPrice(product.price)}</h3>
                    <p>{product.title}</p>
                </div>
            </div>
            <AddToCartButton type="button" onClick={() => handleAddProduct(product)}>
                <div>
                    <MdAddShoppingCart />
                    {cartItensAmount[product.id] || 0}
                </div>

                <span>ADICIONAR AO CARRINHO</span>
            </AddToCartButton>
        </ProductContainer>
    );
}