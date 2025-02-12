import { Link } from "react-router-dom";
import errorPage from "../assets/error-page.jpg";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-2 md:space-y-5">
      <h2 className="text-lg md:text-4xl font-bold">Page Not Found</h2>
      <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] ">
        <img src={errorPage} alt="error" />
      </div>
      <div className="text-center">
        <Link to="/">
          <button className="btn btn-info">Get Back Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
