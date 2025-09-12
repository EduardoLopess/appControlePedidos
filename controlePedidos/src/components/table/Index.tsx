import { TouchableOpacity, View, Text, Image, Alert } from "react-native";
import tableStyle from "./style";

export const Table = () => {

  const alert = () => {
    Alert.alert("ADAS")
  }

  return (
    <TouchableOpacity style={tableStyle.container} onPress={() => alert()}>
      <View style={tableStyle.containerNumber}>
        <Text style={tableStyle.txtNumber}>MESA 01</Text>
      </View>
      <View style={tableStyle.containerImg}>
        <Image
          source={require("../../../assets/mesa.png")}
          style={tableStyle.imgTable}
        />
      </View>

      <View style={tableStyle.containerStatus}>
        <Text style={tableStyle.txtStatus}>LIVRE</Text>
      </View>
    </TouchableOpacity>
  );
};
