import { Image, Modal, Text, TouchableOpacity, View } from "react-native"
import ProductCategoryStyle from '../styles/style'
import ModalStyle from '../styles/styleModal'
import { useControlModal } from "../../../utils/modal/controlModal"


export const NoAlcoolCategory = () => {

    const { isModalVisible, open, close } = useControlModal()


    return (
        <TouchableOpacity style={ProductCategoryStyle.container} onPress={() => open()}>
            <View style={ProductCategoryStyle.containerImg}>
                <Image
                    source={require('../../../../assets/noalcool.png')}
                    style={ProductCategoryStyle.imgCategory}
                />
            </View>

            <View style={ProductCategoryStyle.containerTxt}>
                <Text style={ProductCategoryStyle.txtCategory}>SEM ÁLCOOL</Text>

            </View>

            <Modal
                visible={isModalVisible}
                animationType="slide"
                onRequestClose={close}
            >

                <View style={ModalStyle.container}>

                    <View style={ModalStyle.containerContent}>


                    </View>

                    <View style={ModalStyle.containerBtn}>
                        <TouchableOpacity onPress={close} style={ModalStyle.btnClose}>
                            <Text>FECHAR</Text>
                        </TouchableOpacity>


                    </View>


                </View>


            </Modal>

        </TouchableOpacity>

    )
}