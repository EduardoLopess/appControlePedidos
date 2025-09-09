import { ScrollView, View } from "react-native";
import { Table } from "../../components/table/Index";
import tableScreanStyle from "../styles/TableScreanStyle";

export const TableScreen = () => {
  return (
    <View style={tableScreanStyle.container}>
      <Table />
      <Table />
      <Table />
      <Table />
      <Table />
      <Table />
    </View>
  );
};
