import { Heading } from "@chakra-ui/react";
import { useApp } from "../contexts/AppProvider";

const GameHeading = () => {
  const { selectedGenre, selectedPlatform } = useApp();

  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;

  return (
    <Heading marginBottom={5} as={"h1"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
