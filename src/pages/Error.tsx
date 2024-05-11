import { useRouteError } from "react-router-dom";

interface RouteError {
  message?: string;
 
}

export default function Error() {
  const error = useRouteError() as RouteError;

  if (!error || !error.message) {
    return null;
  }

  console.error(error);

  return (
    <div id="error-page" style={{marginTop:'8rem', minHeight:'90vh'}}>
      <h1 style={{fontSize:'3rem', textAlign:'center' , color:'var(--banner)'}}>Oops!</h1>
      <p style={{fontSize:'3rem', textAlign:'center', color:'var(--banner)'}}>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.message}</i>
      </p>
    </div>
  );
}
