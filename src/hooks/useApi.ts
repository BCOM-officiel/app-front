import { useState, useEffect } from "react";

const useApi = <T>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${process.env.REACT_APP_API_URI}/${endpoint}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const json = await response.json();
        const jsonData = await json?.data;
        setData(jsonData);
        setError(null);
      } catch (error: any) {
        setError(error.message || "Something went wrong");
        console.error(`useApi Error : ${error}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, isLoading, error };
};

export default useApi;
