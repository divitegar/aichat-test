import { useCallback, useEffect, useState } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
