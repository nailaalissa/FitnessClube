import {useEffect, useRef, useState} from 'react';

type UsePaginationProps = {
  totalPages: number;
  initialCursor?: number;
  onChange?: (value: number) => void;
};

export const NO_TOTAL_PAGES_ERROR = 'The UsePagination hook must receive a totalPages argument for it to work';

const usePagination = ({totalPages, initialCursor = 0, onChange}: UsePaginationProps) => {
   if (!totalPages) {
       throw new Error(NO_TOTAL_PAGES_ERROR);
   }

   const [cursor, setInternalCursor] = useState(initialCursor || 0);
 
   const setCursor = (newCursor: number) => {
    if (newCursor >= 0 && newCursor < totalPages) {
        setInternalCursor(newCursor);
    }
};

  //  const goNext = () => {
  //      const nextCursor = cursor + 1;
  //      setCursor(nextCursor);
  //  };

  //  const goPrev = () => {
  //      const prevCursor = cursor - 1;
  //      setCursor(prevCursor);
  //  };

   const isHookInitializing = useRef(true);

   useEffect(() => {
    if (isHookInitializing.current) {
        isHookInitializing.current = false;
    } else {
        onChange?.(cursor);
    }
}, [cursor,onChange]);

   return {totalPages, cursor, setCursor};
};

export default usePagination;