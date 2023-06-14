import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useGames = () => {
  const [games, setGames] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get("/games", {
        signal: controller.signal,
      })
      .then(({ data }) => {
        setGames(data);
        setLoading(false);
      })
      .catch((error) => setError(error.message));

    return () => controller.abort();
  }, []);

  return { games, loading, error };
};

export default useGames;
