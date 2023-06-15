import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGird from "./components/GameGird";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
  return (
    <Grid
      gridTemplateAreas={{
        base: `"nav""main"`,
        lg: `"nav nav""aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem
          height={"fit-content"}
          position={"sticky"}
          top={0}
          area={"aside"}
          paddingX={5}
        >
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <HStack paddingLeft={2} marginBottom={5} spacing={5}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGird />
      </GridItem>
    </Grid>
  );
}

export default App;
