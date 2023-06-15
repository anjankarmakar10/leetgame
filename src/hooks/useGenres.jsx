import genres from "../data/genres";

const useGenres = () => {
  return { genres, loading: false, error: null };
};

export default useGenres;
