import { Card, CardBody, Image, Heading, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

const GameCard = ({ game }) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game?.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game?.name}</Heading>
        <PlatformIconList platforms={game?.parent_platforms} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
