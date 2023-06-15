import { HStack, Image, List, ListItem, Button } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";
import { useApp } from "../contexts/AppProvider";

const GenreList = () => {
  const { genres, loading, error } = useGenres();
  const genreSkeletons = Array(12).fill("🔥");

  const { selectedGenre, setSelectedGenre } = useApp();

  if (error) return null;

  return (
    <List>
      {loading &&
        genreSkeletons.map((item, index) => <GenreListSkeleton key={index} />)}
      {genres?.results?.map((genre) => (
        <ListItem paddingY={"5px"} key={genre.id}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={"8px"}
              src={getCroppedImageUrl(genre?.image_background)}
            />
            <Button
              whiteSpace={"normal"}
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
  );
};

export default GenreList;
