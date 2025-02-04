import { useState, useEffect } from "react";
import axios from "axios";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: unknown;
}

const useFetch = <T,>(url: string): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error|null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<T>(url);
        setData(response.data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);  // Store the full error object
        } else {
          setError(new Error(String(error)));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
