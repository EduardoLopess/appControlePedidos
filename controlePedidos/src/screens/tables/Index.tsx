import { ScrollView, TouchableOpacity, View, Text } from "react-native";
import { Table } from "../../components/table/Index";
import tableScreanStyle from "./style";
import EvilIcons from "@expo/vector-icons/EvilIcons";

export const TableScreen = () => {
  return (
    <View style={tableScreanStyle.container}>
      <View style={tableScreanStyle.containerBtn}>
        <TouchableOpacity style={tableScreanStyle.btnBusca}>
          <EvilIcons name="search" size={30} color="black" />
          <Text style={{ justifyContent: "center" }}>Buscar</Text>
        </TouchableOpacity>

        <View style={tableScreanStyle.containerOrder}>
          <TouchableOpacity
            style={[
              { backgroundColor: "#13b30dff" },
              tableScreanStyle.btnOrder,
            ]}
          >
            <Text style={tableScreanStyle.txtBtnOrder}>LIVRE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              { backgroundColor: "#c00a0aff" },
              tableScreanStyle.btnOrder,
            ]}
          >
            <Text style={tableScreanStyle.txtBtnOrder}>OCUPADA</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Table />
      <Table />
      <Table />
      <Table />
      <Table />
      <Table />
      <Table />
      <Table />
      <Table />
    </View>
  );
};
