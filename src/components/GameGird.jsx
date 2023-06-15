import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { useApp } from "../contexts/AppProvider";

const GameGird = () => {
  const { selectedGenre, selectedPlatform, selectedSrot, searchValue } =
    useApp();
  const { games, error, loading } = useGames(
    selectedGenre,
    selectedPlatform,
    selectedSrot,
    searchValue
  );
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  console.log(searchValue);

  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        padding={"10px"}
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing="10px"
      >
        {loading &&
          skeletons.map((item) => (
            <GameCardContainer key={item}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games?.results.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGird;
