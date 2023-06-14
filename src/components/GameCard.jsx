import { Card, CardBody, Image, Heading, Text, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

const GameCard = ({ game }) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game?.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game?.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList platforms={game?.parent_platforms} />
          <CriticScore score={game?.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
