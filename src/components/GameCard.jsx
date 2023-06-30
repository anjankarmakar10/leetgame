import { CardBody, Image, Heading, HStack, Card } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

const GameCard = ({ game }) => {
  return (
    <Card boxShadow={"md"} minHeight={"316px"}>
      <Image src={getCroppedImageUrl(game?.background_image)} />
      <CardBody>
        <HStack marginBottom={3} justifyContent="space-between">
          <PlatformIconList platforms={game?.parent_platforms} />
          <CriticScore score={game?.metacritic} />
        </HStack>
        <Heading noOfLines={2} fontSize="2xl">
          {game?.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
