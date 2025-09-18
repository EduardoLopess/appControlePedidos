import { useState } from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import ProductCategoryStyle from "../products-category/styles/style";
import ModalCategoryStyle from "../products-category/styles/styleModal";
import EvilIcons from "@expo/vector-icons/EvilIcons";

type Props = {
  title: string;
  urlImg: any;
};

export const ProductCategory = ({ title, urlImg }: Props) => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const open = () => setModalVisible(true);
  const close = () => setModalVisible(false);

  // const data = {
  //   name: 'Polar', category: 'cerveja', type: '600', price: '23,90',
  //    name: 'Polar', category: 'cerveja', type: '600', price: '23,90',
  //     name: 'Polar', category: 'cerveja', type: '600', price: '23,90',
  //      name: 'Polar', category: 'cerveja', type: '600', price: '23,90',
  // }

  return (
    <View>
      <TouchableOpacity style={ProductCategoryStyle.container} onPress={open}>
        <View style={ProductCategoryStyle.containerImg}>
          <Image source={urlImg} style={ProductCategoryStyle.imgCategory} />
        </View>

        <View style={ProductCategoryStyle.containerTxt}>
          <Text style={ProductCategoryStyle.txtCategory}>{title}</Text>
        </View>

        <Modal
          visible={isModalVisible}
          animationType="slide"
          onRequestClose={close}
        >
          <View style={ModalCategoryStyle.container}>
            <View style={ModalCategoryStyle.containerTxtCategory}>
              <Text style={ModalCategoryStyle.txtTitleCategory}>{title}</Text>
            </View>

            <View style={ModalCategoryStyle.containerContent}>

              <View style={ModalCategoryStyle.containerType}>
                <Text style={ModalCategoryStyle.txtType}>S/Peixe</Text>
              </View>

              <View style={ModalCategoryStyle.containerProp}>
                <View style={ModalCategoryStyle.containerName}>
                  <Text style={ModalCategoryStyle.txtProp}>Batata frita</Text>
                </View>
                <View style={ModalCategoryStyle.containerPrice}>
                  <Text style={ModalCategoryStyle.txtProp}>R$: 30,00</Text>
                </View>
                <View style={ModalCategoryStyle.containerBtnAdd}>
                  <TouchableOpacity style={ModalCategoryStyle.btnAdd}>
                     <EvilIcons name="plus" size={35} color="black" />
                  </TouchableOpacity>
                </View>

              </View>
            </View>

            <View style={ModalCategoryStyle.btnCloseContainer}>
              <TouchableOpacity
                onPress={close}
                style={ModalCategoryStyle.btnClose}
              >
                <Text style={ModalCategoryStyle.txtBtnClose}>FECHAR</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </TouchableOpacity>
    </View>
  );
};
