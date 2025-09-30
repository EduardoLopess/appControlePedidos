import { createContext, useContext, useState } from "react";

type CartProviderProps = {
  children: React.ReactNode;
};

type ItemCart = {
    id: number,
    nameProduct: string,
    priceProduct: number,
    quantity: number
}

type Additional = {
    id: number,
    nameAdc: string,
    priceAdc: number
}

type ItemCartAla = {
    id: number,
    nameProduct: string,
    priceProduct: number,
    quantity: number,
    Additional?: Additional[],
    obs?: string
}

type CartItem = ItemCart | ItemCartAla;

type CartContextType = {
    itemCart: CartItem[],
    addItemCart: (productId: number, additionalId?: number) => void,
    deleteItemCart: (productId?: number, additionalId?: number) => void
};



const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: CartProviderProps) => {
    const [itemCart, setItemCart] = useState<CartItem[]>([]);

  
    const addItemCart = (productId: number, additionalId?: number) => {
        
    }

    const deleteItemCart = (productId?: number, additionalId?: number) => {

    }

  return (
    <CartContext.Provider value={{
        itemCart,
        addItemCart,
        deleteItemCart
    }}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
