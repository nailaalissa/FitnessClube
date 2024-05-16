
import { useEffect, useMemo, useState } from "react";

const usePagination = <T>(data: T[], pageNumber: number = 9) => {
  const [volume, setVolume] = useState(pageNumber);

  useEffect(() => {
    const handleResize = () => {
      setVolume(window.innerWidth < 1195 ? 8 : 9); // Default to 8 or 9 based on screen size
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = useMemo(() => Math.ceil(data.length / volume), [
    volume,
    data.length
  ]);
  const [page, setPage] = useState(0);
  const slicedData = useMemo(
    () => data.slice(page * volume, page * volume + volume),
    [data, page, volume]
  );

  return { data: slicedData, page, totalPages, setPage };
};

export default usePagination;

