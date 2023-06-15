import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const usePlatforms = () => {
  const [platforms, setPlatforms] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get("/platforms/lists/parents", {
        signal: controller.signal,
      })
      .then(({ data }) => {
        setPlatforms(data);
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

  return { platforms, loading, error };
};

export default usePlatforms;
