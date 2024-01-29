import { useState, useEffect } from "react";

const DEFAULT_OPTIONS = {};

export function useFetch(url, options = DEFAULT_OPTIONS) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setData(undefined);
    setIsError(false);
    setIsLoading(true);

    const abortController = new AbortController();

    fetch(url, { signal: abortController.signal, ...options })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(res);
        }
      })
      .then(setData)
      .catch((err) => {
        if (err.name === "AbortError") return;
        setIsError(true);
      })
      .finally(() => {
        if (abortController.signal.aborted) return;
        setIsLoading(false);
      });

    return () => {
      abortController.abort();
      };
      
  }, [url, options]);

  return { data, isLoading, isError };
}
