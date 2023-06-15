import { HStack, Image, List, ListItem, Button } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";
import { useApp } from "../contexts/AppProvider";

const GenreList = () => {
  const { genres, loading } = useGenres();
  const genreSkeletons = Array(12).fill("🔥");

  const { setSelectedGenre } = useApp();

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
              onClick={() => setSelectedGenre(genre)}
              variant={"link"}
              fontSize={"lg"}
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
