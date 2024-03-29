import React, { useState } from "react";
import { Text, View } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import ShopNavigator from "./navigation/ShopNavigator";
import { AppLoading } from "expo";
import * as Font from "expo-font";

import productsReducer from "./store/reducers/products";

const rootReducer = combineReducers({
  products: productsReducer
});

const store = createStore(rootReducer);

// const fetchFonts = () => {
//   return Font.loadAsync({
//     "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
//     "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
//   });
// };

export default function App() {
  // const [fontLoaded, setFontLoaded] = useState(false);
  // if (!fontLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => {
  //         setFontLoaded(true);
  //       }}
  //     />
  //   );
  // }
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
