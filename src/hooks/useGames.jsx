import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

const useGames = (
  selectedGenre,
  selectedPlatform,
  selectedSrot,
  searchValue
) => {
  const gameQuery = {
    selectedGenre,
    selectedPlatform,
    selectedSrot,
    searchValue,
  };

  return useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get("/games", {
          params: {
            genres: selectedGenre?.id,
            parent_platforms: selectedPlatform?.id,
            ordering: selectedSrot?.value,
            search: searchValue,
          },
        })
        .then((res) => res?.data?.results),
  });
};

export default useGames;
