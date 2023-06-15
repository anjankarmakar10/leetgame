import { Card } from "@chakra-ui/react";

const GameCardContainer = ({ children }) => {
  return (
    <Card
      marginX={"auto"}
      width={"300px"}
      borderRadius={10}
      overflow={"hidden"}
    >
      {children}
    </Card>
  );
};

export default GameCardContainer;
