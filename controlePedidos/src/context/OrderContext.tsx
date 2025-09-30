import { createContext, useContext } from "react"

type OrderContextType = {}

type OrderProviderProps = {
    children: React.ReactNode
}

const OrderContext = createContext<OrderContextType | undefined>(undefined)

export const OrderProvider = ({children}: OrderProviderProps) => {
    const contextValue: OrderContextType = {}


    return (
        <OrderContext.Provider value={contextValue}>
            {children}
        </OrderContext.Provider>

    )
}

export const useOrderContext = () => useContext(OrderContext)