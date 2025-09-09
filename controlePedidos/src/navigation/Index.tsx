import { Image, Text, TouchableOpacity, View } from "react-native";
import navigationStyle from "./style";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootTabParamList } from "../../App";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";


type NavigationProps = BottomTabNavigationProp<RootTabParamList>

export const BottomNavigation = () => {

    const navigation = useNavigation<NavigationProps>()

  return (
    <View style={navigationStyle.container}>
      <TouchableOpacity style={navigationStyle.btn} onPress={() => navigation.navigate('Produtos')}>
        <Image
          source={require("../../assets/produtos.png")}
          style={navigationStyle.imgNavigation}
        />

        <Text style={navigationStyle.txtBtn}>PRODUTOS</Text>
      </TouchableOpacity>

      <View style={navigationStyle.divisao} />

      <TouchableOpacity style={navigationStyle.btn} onPress={() => navigation.navigate('Mesas')}>
        <Image
          source={require("../../assets/mesa.png")}
          style={navigationStyle.imgNavigation}
        />

        <Text style={navigationStyle.txtBtn}>MESAS</Text>
      </TouchableOpacity>

      <View style={navigationStyle.divisao} />

      <TouchableOpacity style={navigationStyle.btn} onPress={() => navigation.navigate('Pedidos')}>
        <Image
          source={require("../../assets/pedidos.png")}
          style={navigationStyle.imgNavigation}
        />

        <Text style={navigationStyle.txtBtn}>PEDIDOS</Text>
      </TouchableOpacity>
    </View>
  );
};
