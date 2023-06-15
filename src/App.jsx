import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGird from "./components/GameGird";
import GenreList from "./components/GenreList";

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
        <GameGird />
      </GridItem>
    </Grid>
  );
}

export default App;
