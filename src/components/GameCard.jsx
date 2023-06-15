import { CardBody, Image, Heading, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import GameCardContainer from "./GameCardContainer";

const GameCard = ({ game }) => {
  return (
    <GameCardContainer>
      <Image src={getCroppedImageUrl(game?.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game?.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList platforms={game?.parent_platforms} />
          <CriticScore score={game?.metacritic} />
        </HStack>
      </CardBody>
    </GameCardContainer>
  );
};

export default GameCard;
