import { useEffect, useState } from "react";

interface UseGetRequestInterface<T> {
  fetchFunc: () => Promise<T>;
  key: number[];
  enabled: boolean;
}

export const useGetRequest = <T>({
  fetchFunc,
  key,
  enabled,
}: UseGetRequestInterface<T>) => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [isFetched, setIsFetched] = useState<boolean>(false);

  useEffect(() => {
    if (enabled) {
      fetchFunc().then((fetchedData: T) => {
        let data = fetchedData;

        setIsFetched(true);
        setData(data);
      });
    }
  }, key);

  return { data, isFetched };
};
