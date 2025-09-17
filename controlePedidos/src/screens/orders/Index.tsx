import { TouchableOpacity, View, Text } from "react-native"
import OrderScreanStyle from './style'
import { Order } from "../../components/order/Index"


export const OrdersScreen = () => {
    return (
        <View style={OrderScreanStyle.container}>
            


            <Order/>
            <Order/>
            <Order/>
            <Order/>
            <Order/>
            
            
        </View>
    )
}