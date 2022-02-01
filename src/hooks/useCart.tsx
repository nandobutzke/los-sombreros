import { createContext, ReactNode, useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { Product } from "../types";

interface CartProviderProps {
    children: ReactNode;
}

interface CartContextData {
    cart: Product[];
    addProduct: (productId: number) => Promise<void>;
    removeProduct: (productId: number) => Promise<void>;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<Product[]>(() => {
        const storagedCart = localStorage.getItem('@LosSombreros:cart');
    
        if (storagedCart) {
          return JSON.parse(storagedCart);
        }
    
        return [];
    });

    const prevCartRef = useRef<Product[]>();

    useEffect(() => {
        prevCartRef.current = cart;
    });

    const cartPreviousValue = prevCartRef.current ?? cart;

    useEffect(() => {
        if (cartPreviousValue !== cart) {
            localStorage.setItem('@LosSombreros:cart', JSON.stringify(cart));
        }
    }, [cart, cartPreviousValue]);

    async function addProduct(productId: number) {
        try {
            const updatedCart = [...cart];

            const productExists = updatedCart.find(product => productId === product.id);

            const stock = await api.get(`/stock/${productId}`);

            const stockAmount = stock.data.amount;

            const currentAmount = productExists ? productExists.amount : 0;
            const amount = currentAmount + 1;

            if (amount > stockAmount) {
                toast.error('Quantidade solicitada fora de estoque');
                return;
            }

            if (productExists) {
                productExists.amount = amount;
            } else {
                const product = await api.get(`/products/${productId}`);

                const newProduct = {
                    ...product.data,
                    amount: 1
                };
                updatedCart.push(newProduct);
            }

            setCart(updatedCart);
        } catch {
            toast.error('Erro ao adicionar o produto');
        }
    }

    async function removeProduct(productId: number) {
        const cartFilter = cart.filter(product => product.id !== productId);

        setCart(cartFilter);
        localStorage.setItem('@LosSombreros:cart', JSON.stringify(cartFilter));
    }

    async function updateProductAmount() {

    }

    return (
        <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);

    return context;
}