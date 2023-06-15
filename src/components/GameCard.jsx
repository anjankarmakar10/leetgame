import { CardBody, Image, Heading, HStack, Card } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

const GameCard = ({ game }) => {
  return (
    <Card minHeight={"305px"}>
      <Image src={getCroppedImageUrl(game?.background_image)} />
      <CardBody>
        <Heading noOfLines={2} fontSize="2xl">
          {game?.name}
        </Heading>
        <HStack marginTop={"2px"} justifyContent="space-between">
          <PlatformIconList platforms={game?.parent_platforms} />
          <CriticScore score={game?.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
