import { Image, Text, TouchableOpacity, View } from "react-native"
import ProductCategoryStyle from '../styles/style'

export const PastelCategory = () => {
    return (
        <TouchableOpacity style={ProductCategoryStyle.container}>
            <View style={ProductCategoryStyle.containerImg}>
                <Image
                    source={require('../../../../assets/pastel.png')}
                    style={ProductCategoryStyle.imgCategory}
                />
            </View>

            <View style={ProductCategoryStyle.containerTxt}>
                <Text style={ProductCategoryStyle.txtCategory}>PASTÉIS</Text>

            </View>

        </TouchableOpacity>
    )
}