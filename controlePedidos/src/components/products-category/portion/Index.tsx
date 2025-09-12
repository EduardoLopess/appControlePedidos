import { Image, Text, TouchableOpacity, View } from "react-native"
import ProductCategoryStyle from '../styles/style'

export const PortionCategory = () => {
    return (
        <TouchableOpacity style={ProductCategoryStyle.container}>
            <View style={ProductCategoryStyle.containerImg}>
                <Image
                    source={require('../../../../assets/porcoes.png')}
                    style={ProductCategoryStyle.imgCategory}

                />
            </View>

            <View style={ProductCategoryStyle.containerTxt}>
                <Text style={ProductCategoryStyle.txtCategory}>PORCÕES</Text>

            </View>

        </TouchableOpacity>
    )
}