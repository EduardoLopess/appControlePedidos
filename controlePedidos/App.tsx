import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as NavigationBar from "expo-navigation-bar";
import { BottomNavigation } from "./src/navigation/Index";
import { TableScreen } from "./src/screens/tables/Index";
import { NavigationContainer } from "@react-navigation/native";
import { ProductsScreen } from "./src/screens/products/Index";
import { useEffect } from "react";
import { OrdersScreen } from "./src/screens/orders/Index";
import { ActivityIndicator, AppState, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { Cart } from "./src/components/cart/Index";

(Text as any).defaultProps = {
  ...(Text as any).defaultProps,
  style: { fontFamily: "Montserrat" },
};

export type RootTabParamList = {
  Mesas: undefined;
  Produtos: undefined;
  Pedidos: undefined;
};

const Tab = createBottomTabNavigator();
export default function App() {

  const [fontsLoaded] = useFonts({
    SpaceMono_Regular: require("./assets/fonts/SpaceMono-Regular.ttf"),
    SpaceMono_Bold: require("./assets/fonts/SpaceMono-Bold.ttf"),
  });

  useEffect(() => {
    NavigationBar.setVisibilityAsync("hidden");
    const subscription = AppState.addEventListener(
      "change",
      async (nextAppState) => {
        if (nextAppState === "active") {
          await NavigationBar.setVisibilityAsync("hidden");
        }
      }
    );

    return () => subscription.remove();
  }, []);

   if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={() => <BottomNavigation />}
        screenOptions={{
          headerTitleAlign: "center",
          headerRight: () => <Cart/>
        }}
      >
        <Tab.Screen
          name="Mesas"
          component={TableScreen}
          options={{ headerTitle: "MESAS" }}
        />

        <Tab.Screen
          name="Produtos"
          component={ProductsScreen}
          options={{ headerTitle: "PRODUTOS" }}
        />

        <Tab.Screen
          name="Pedidos"
          component={OrdersScreen}
          options={{ headerTitle: "PEDIDOS" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
