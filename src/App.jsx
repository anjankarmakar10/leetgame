import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      gridTemplateAreas={{
        base: `"nav""main"`,
        lg: `"nav nav""aside main"`,
      }}
    >
      <GridItem bg="orange.300" area={"nav"}>
        Header
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
