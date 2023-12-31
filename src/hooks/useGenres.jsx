import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.get("/genres").then((res) => res?.data?.results),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: genres,
  });
};

export default useGenres;
