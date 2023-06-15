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
        setError("");
      })
      .catch((error) => {
        if (error.message instanceof controller) return;
        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { games, loading, error };
};

export default useGames;
