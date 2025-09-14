import { useState } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import ProductCategoryStyle from '../products-category/styles/style'

type Props = {
    title: string,
    urlImg: any
}

export const ProductCategory = ({title, urlImg}: Props) => {

    const [isModalVisible, setModalVisible] = useState(false)
    const open = () => setModalVisible(true)
    const close = () => setModalVisible(false)


    return (
        <View>
            <TouchableOpacity style={ProductCategoryStyle.container} onPress={open}>
                <View style={ProductCategoryStyle.containerImg}>
                    <Image
                        source={urlImg}
                        style={ProductCategoryStyle.imgCategory}
                    />
                </View>

                <View style={ProductCategoryStyle.containerTxt}>
                    <Text style={ProductCategoryStyle.txtCategory}>{title}</Text>
                </View>

            </TouchableOpacity>

        </View>
    )
}