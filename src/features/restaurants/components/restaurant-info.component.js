import { Card } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.spacing[1]};
  background-color: white;
`;

const Title = styled.Text`
  padding: ${(props) => props.theme.spacing[1]};
`;

export default function RestaurantInfo({ restaurant = {} }) {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://img.freepik.com/premium-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-8576.jpg?w=360",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily, // 👈 declared but NOT used
  } = restaurant;

  return (
    <>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Title>{name}</Title>
      </RestaurantCard>
    </>
  );
}
