import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import { Platform } from "react-native";

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen
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
