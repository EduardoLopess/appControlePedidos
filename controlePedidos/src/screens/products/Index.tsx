import { View } from "react-native";

import ProductScreanStyle from "./style";

import { ProductCategory } from "../../components/category-products/Index";

export const ProductsScreen = () => {
  return (
    <View style={ProductScreanStyle.container}>
      <ProductCategory
        title="PORÇÕES"
        urlImg={require("../../../assets/porcoes.png")}
      />
      <ProductCategory
        title="PASTÉIS"
        urlImg={require("../../../assets/pastel.png")}
      />
      <ProductCategory
        title="CERVEJAS"
        urlImg={require("../../../assets/cerveja.png")}
      />
      <ProductCategory
        title="DRINKS"
        urlImg={require("../../../assets/drink.png")}
      />
      <ProductCategory
        title="SEM ÁLCOOL"
        urlImg={require("../../../assets/noalcool.png")}
      />
      <ProductCategory
        title="À ALA MINUTA"
        urlImg={require("../../../assets/refeicao.png")}
      />
    </View>
  );
};
