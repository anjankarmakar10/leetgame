import { Text, SimpleGrid, Button } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { useApp } from "../contexts/AppProvider";
import { Fragment } from "react";

const GameGird = () => {
  const { selectedGenre, selectedPlatform, selectedSrot, searchValue } =
    useApp();
  const {
    data,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGames(selectedGenre, selectedPlatform, selectedSrot, searchValue);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        padding={"10px"}
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={4}
      >
        {isLoading &&
          skeletons.map((item) => (
            <GameCardContainer key={item}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages?.map((page, index) => (
          <Fragment key={index}>
            {page?.results?.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </Fragment>
        ))}
      </SimpleGrid>
      <Button m={"10px"} onClick={() => fetchNextPage()}>
        {isFetchingNextPage ? "Loading..." : "Loadmore"}
      </Button>
    </>
  );
};

export default GameGird;
