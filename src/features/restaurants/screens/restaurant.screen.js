import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import RestaurantInfo from "../components/restaurant-info.component";
import styled from "styled-components/native";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.spacing[1]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.spacing[1]};
`;

export default function RestaurantScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SearchContainer>
        <Searchbar placeholder="search.." />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfo></RestaurantInfo>
      </RestaurantListContainer>
    </SafeAreaView>
  );
}
