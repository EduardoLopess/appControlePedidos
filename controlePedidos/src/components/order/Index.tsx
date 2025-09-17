import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import OrderCardStyle from "./style";
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

            <TouchableOpacity onPress={close}><Text>FECHAR</Text></TouchableOpacity>

        </Modal>
      
    </TouchableOpacity>
  );
};
