import { Image, Text, TouchableOpacity, View } from "react-native"
import ProductCategoryStyle from '../styles/style'


export const AlaminutaCategory = () => {
    return (
        <TouchableOpacity style={ProductCategoryStyle.container}>
            <View style={ProductCategoryStyle.containerImg}>
                <Image
                    source={require('../../../../assets/refeicao.png')}
                    style={ProductCategoryStyle.imgCategory}
                />
            </View>

            <View style={ProductCategoryStyle.containerTxt}>
                <Text style={ProductCategoryStyle.txtCategory}>À ALA MINUTA</Text>

            </View>
       
        </TouchableOpacity>
    )
}