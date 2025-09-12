import { Image, Text, TouchableOpacity, View } from "react-native"
import ProductCategoryStyle from '../styles/style'


export const DrinkCategory = () => {
    return (
        <TouchableOpacity style={ProductCategoryStyle.container}>
            <View style={ProductCategoryStyle.containerImg}>
                <Image source={require('../../../../assets/drink.png')}
                    style={ProductCategoryStyle.imgCategory}
                />

            </View>

            <View style={ProductCategoryStyle.containerTxt}>
                <Text style={ProductCategoryStyle.txtCategory}>DRINKS</Text>
            </View>

        </TouchableOpacity>
    )
}