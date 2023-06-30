import {
  HStack,
  Image,
  List,
  ListItem,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";
import { useApp } from "../contexts/AppProvider";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const genreSkeletons = Array(12).fill("🔥");

  const { selectedGenre, setSelectedGenre } = useApp();

  if (error) return null;

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          genreSkeletons.map((item, index) => (
            <GenreListSkeleton key={index} />
          ))}
        {data?.map((genre) => (
          <ListItem paddingY={"5px"} key={genre.id}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={"8px"}
                objectFit={"cover"}
                src={getCroppedImageUrl(genre?.image_background)}
              />
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                onClick={() => setSelectedGenre(genre)}
                variant={"link"}
                fontSize={"lg"}
                fontWeight={genre?.id === selectedGenre?.id ? "bold" : "normal"}
              >
                {genre?.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
