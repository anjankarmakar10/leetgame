import apiClient from "../services/api-client";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

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

  return useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient
        .get("/games", {
          params: {
            genres: selectedGenre?.id,
            parent_platforms: selectedPlatform?.id,
            ordering: selectedSrot?.value,
            search: searchValue,
            page: pageParam,
          },
        })
        .then((res) => res?.data),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage?.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default useGames;
