import { useNavigate } from 'react-router-dom';

export default function NotFound() {

   const navigate = useNavigate();

   return (
      <div className="d-flex flex-column justify-content-center align-items-center w-100" style={{ height: '100vh' }}>
         <h1>Oops!</h1>
         <p>Sorry, an unexpected error has occurred.</p>
         <h2 className="text-danger">404 Not Found</h2>
         <button onClick={() => navigate(-1)} className="btn btn-outline-secondary mt-4">Go Back</button>
      </div>
   );
}