import axios from "axios";
import { useEffect, useMemo, useState } from "react";

export function useFetchDataByGet() {
  let [url, setUrl] = useState(null);
  let [data, setData] = useState(null);
  let [error, setError] = useState(null);
  let [isLoading, setIsLoading] = useState(false);

  let dataCount = useMemo(() => {
    return data ? data.length : 0;
  }, [data]);

  let getData = async () => {
    try {
      let response = await axios.get(url);
      setIsLoading(false);
      setData(response.data);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (url) {
      setIsLoading(true);
      getData();
    }
  }, [url]);

  return {
    data,
    error,
    dataCount,
    isLoading,
    setUrl,
  };
}
