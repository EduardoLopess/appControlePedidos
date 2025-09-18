import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as NavigationBar from 'expo-navigation-bar';
import { BottomNavigation } from "./src/navigation/Index";
import { TableScreen } from "./src/screens/tables/Index";
import { NavigationContainer } from "@react-navigation/native";
import { ProductsScreen } from "./src/screens/products/Index";
import { useEffect } from "react";
import { OrdersScreen } from "./src/screens/orders/Index";
import { AppState } from "react-native";

export type RootTabParamList = {
  Mesas: undefined;
  Produtos: undefined;
  Pedidos: undefined
};

const Tab = createBottomTabNavigator();
export default function App() {

  useEffect(() => {
    const subscription = AppState.addEventListener("change", async (nextAppState) => {
      if (nextAppState === "active") {
        await NavigationBar.setVisibilityAsync("hidden");
      }
    });

    return () => subscription.remove();
  }, []);


  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={() => <BottomNavigation />}
        screenOptions={{
          headerTitleAlign: "center",
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
          options={{ headerTitle: "PEDIDOS"}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
