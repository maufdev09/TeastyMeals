import { StyleSheet } from "react-native";

import RestaurantScreen from "./src/features/restaurants/screens/restaurant.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrasructure/theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen></RestaurantScreen>;
      </ThemeProvider>
    </>
  );
}

const styles = StyleSheet.create({});
