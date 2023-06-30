import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get("/platforms/lists/parents")
        .then((res) => res?.data?.results),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: platforms,
  });
};

export default usePlatforms;
