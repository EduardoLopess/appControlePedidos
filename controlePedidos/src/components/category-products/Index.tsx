import { useState } from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import ProductCategoryStyle from "../products-category/styles/style";
import ModalCategoryStyle from "../products-category/styles/styleModal";

type Props = {
  title: string;
  urlImg: any;
};

export const ProductCategory = ({ title, urlImg }: Props) => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const open = () => setModalVisible(true);
  const close = () => setModalVisible(false);

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

            <View style={ModalCategoryStyle.containerContent}></View>

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
