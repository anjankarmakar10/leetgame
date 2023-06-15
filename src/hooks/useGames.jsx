import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useGames = (selectedGenre, selectedPlatform) => {
  const [games, setGames] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get("/games", {
        signal: controller.signal,
        params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id },
      })
      .then(({ data }) => {
        setGames(data);
        setLoading(false);
        setError("");
      })
      .catch((error) => {
        if (error.message === "canceled") return;
        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [selectedGenre?.id, selectedPlatform?.id]);

  return { games, loading, error };
};

export default useGames;
