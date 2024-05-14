import { useEffect, useState } from "react";

function useFetch<ResponseType>(url: string,key:string,host:string) {
	const [data, setData] = useState<ResponseType | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		(async () => {
		
			const controller = new AbortController();
			const signal = controller.signal;

			try {
				setIsLoading(true);

				
				const response = await fetch(url,{  method: 'GET',
        signal,
         headers: {
           'X-RapidAPI-Key':key,
           'X-RapidAPI-Host': host
         }});

         if (response.ok) {
           const data = await response.json();
           setData(data);
        } else {
           const errorMessage = await response.text();
           setIsError(true);
        
           return Promise.reject(new Error(errorMessage))
          
        }
				
			} catch (error) {
        setIsError(true);
      
				setError(error as Error);
			} finally {
				setIsLoading(false);
			}

		
			return () => controller.abort();
		})();
	}, [url,key,host]);
  console.log(isError, error);
	return { data, isLoading, isError, error };
}

export default useFetch;