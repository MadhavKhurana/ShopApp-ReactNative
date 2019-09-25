import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import { Platform } from "react-native";

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? "#C2185B" : ""
      },
      headerTintColor: Platform.OS === "android" ? "white" : ""
    }
  }
);

export default createAppContainer(ProductsNavigator);
