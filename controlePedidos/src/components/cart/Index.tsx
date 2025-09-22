import { Modal, Text, TouchableOpacity, View } from "react-native"
import { Ionicons } from 'react-native-vector-icons';
import CartStyle from './style'
import { useState } from "react";

export const Cart = () => {

    const [isVisible, setIsVisible] = useState<boolean>(false)
    const open = () => setIsVisible(true)
    const close = () => setIsVisible(false)


    return (
        <TouchableOpacity style={CartStyle.container} onPress={open}>
            <Ionicons name="cart-outline" size={40} color="black" />

            <Modal
                visible={isVisible}
                onRequestClose={close}
                animationType="slide"
            
            >
                <View style={CartStyle.modalContainer}>
                    <View style={CartStyle.cartTop}>
                        <Text style={CartStyle.txtTable}>PEDIDO INICIADO</Text>
                        <Text style={CartStyle.txtTable}>MESA 01</Text>

                    </View>

                    <View style={CartStyle.btnContainer}>
                        <TouchableOpacity>
                            <Text style={CartStyle.txtCancel}>CANCELAR PEDIDO</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={CartStyle.btnClose} onPress={close}>
                            <Text style={CartStyle.txtBtn}>FECHAR</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                

            </Modal>



        </TouchableOpacity>
    )
}