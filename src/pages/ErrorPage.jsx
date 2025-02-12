import { Link } from "react-router-dom";
import errorPage from "../assets/error-page.jpg";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-2 md:space-y-5">
      <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] ">
        <img src={errorPage} alt="error" />
      </div>
      <div className="text-center">
        <h2 className="text-lg md:text-5xl font-bold mb-4 md:mb-8">Page Not Found</h2>
        <Link to="/">
          <button className="btn btn-info">Get Back Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
