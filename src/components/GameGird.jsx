import { Text, SimpleGrid, Box, Spinner } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { useApp } from "../contexts/AppProvider";
import { Fragment } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
InfiniteScroll;
const GameGird = () => {
  const { selectedGenre, selectedPlatform, selectedSrot, searchValue } =
    useApp();
  const { data, error, isLoading, hasNextPage, fetchNextPage } = useGames(
    selectedGenre,
    selectedPlatform,
    selectedSrot,
    searchValue
  );
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  const fetchedGamesCount =
    data?.pages?.reduce((total, page) => total + page?.results?.length, 0) || 0;

  return (
    <>
      {error && <Text>{error?.message}</Text>}

      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={
          <Box py={5} display={"flex"}>
            <Spinner
              mx={"auto"}
              thickness="3px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
            />
          </Box>
        }
      >
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
      </InfiniteScroll>
    </>
  );
};

export default GameGird;
