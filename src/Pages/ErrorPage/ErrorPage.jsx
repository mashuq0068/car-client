import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div className="flex flex-col justify-center items-center h-screen">
           <p className="text-center text-red-600 font-semibold"> {error.status}</p>
           <p className="text-center text-red-600 font-semibold">{error.statusText}</p>
           <p className="text-center text-red-600 font-semibold">{error.error.message}</p>
        </div>
    );
};

export default ErrorPage;