import { View } from "react-native";
import { PortionCategory } from "../../components/products-category/portion/Index";
import ProductScreanStyle from './style'
import { PastelCategory } from "../../components/products-category/pastel/Index";
import { BearCategory } from "../../components/products-category/bear/Index";
import { DrinkCategory } from "../../components/products-category/drink/Index";
import { NoAlcoolCategory } from "../../components/products-category/noAlcool/Index";
import { AlaminutaCategory } from "../../components/products-category/alaminuta/Index";

export const ProductsScreen = () => {
  return (
    <View style={ProductScreanStyle.container}>
      <PortionCategory/>
      <PastelCategory/>
      <BearCategory/>
      <DrinkCategory/>
      <NoAlcoolCategory/>
      <AlaminutaCategory/>
    </View>
  )
};
