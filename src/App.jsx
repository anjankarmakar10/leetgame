import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Grid
      gridTemplateAreas={{
        base: `"nav""main"`,
        lg: `"nav nav""aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem bg="blue" area={"aside"}>
          Aside
        </GridItem>
      </Show>
      <GridItem bg="tomato" area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
