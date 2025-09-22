import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import OrderCardStyle from "./style";
import OrderModalStyle from "./modalStyle"
import { useState } from "react";


export const Order = () => {

    const [isVisible, setIsVisible] = useState<boolean>(false)
    const open = () => setIsVisible(true)
    const close = () => setIsVisible(false)


  return (
    <TouchableOpacity style={OrderCardStyle.container} onPress={open}>

        <View style={OrderCardStyle.containernumberTable}>
          <Text style={OrderCardStyle.txt}>MESA 02</Text>
        </View>

        <View style={OrderCardStyle.containerImg}>
          <Image
            source={require("../../../assets/pedidos.png")}
            style={OrderCardStyle.img}
          />
        </View>

        <View style={OrderCardStyle.containerHr}>
          <Text style={OrderCardStyle.txtHr}>12:30</Text>
        </View>

        <Modal
            visible={isVisible}
            onRequestClose={close}
            animationType="slide"
        >

          <View style={OrderModalStyle.containerTop}>
            <View style={OrderModalStyle.tableNumber}>
              <Text style={OrderModalStyle.txtTableNumber}>PEDIDO MESA: 01</Text>
              <Text style={OrderModalStyle.txtTableNumber}>INICIADO: 12:30</Text>

            </View>

          </View>

          <View style={OrderModalStyle.containerContent}>

          </View>

          <View style={OrderModalStyle.containerBtnClose}>
            <TouchableOpacity style={[ OrderModalStyle.btn, {backgroundColor: 'red'}]} onPress={close}>
              <Text style={OrderModalStyle.txtBtn}>FECHAR</Text>
            </TouchableOpacity>
             <TouchableOpacity style={OrderModalStyle.btn}>
              <Text style={OrderModalStyle.txtBtn}>EDITAR</Text>
            </TouchableOpacity>
          </View>

            
        </Modal>
      
    </TouchableOpacity>
  );
};
