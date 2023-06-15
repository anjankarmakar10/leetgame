import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useGenres = () => {
  const [genres, setGenres] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get("/genres", {
        signal: controller.signal,
      })
      .then(({ data }) => {
        setGenres(data);
        setLoading(false);
        setError("");
      })
      .catch((error) => {
        if (error.message === "canceled") return;
        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, loading, error };
};

export default useGenres;
