import { useState } from "react"

interface useControlModal {
    isModalVisible: boolean,
    open: () => void,
    close: () => void
}

export const useControlModal = (): useControlModal => {
    const [isModalVisible, setModalVisile] = useState(false)
   
    const open = () => setModalVisile(true)
    const close = () => setModalVisile(false)
    
    return { isModalVisible, close, open}
}