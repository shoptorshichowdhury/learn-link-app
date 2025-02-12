import courseIcon from "../assets/allServiceIcon.png";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import { useEffect, useState } from "react";
import axios from "axios";
import PageTitle from "../components/shared/PageTitle";
import { FaSpinner } from "react-icons/fa6";

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAllServices = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/services?search=${search}&sort=${sort}`
        );
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllServices();
  }, [search, sort]);

  return (
    <section>
      <PageTitle title={`Learn Link | All Services`} />
      {/* header part */}
      <div className="h-[200px] md:h-[300px] lg:h-[450px] overflow-hidden bg-secondary/20">
        <div className="w-11/12 mx-auto flex items-center justify-between">
          <div className="w-1/2 md:w-3/5 space-y-1 md:space-y-3">
            <h3 className="text-xl md:text-4xl lg:text-6xl font-semibold text-primary font-poppins">
              All Courses
            </h3>
            <p className="text-xs text-primary md:text-base">
              Discover courses for every skill level and interest. Find the
              perfect one to achieve your goals.
            </p>
          </div>
          <div className="w-1/2 md:w-2/5">
            <img
              className="w-full h-full object-cover"
              src={courseIcon}
              alt="courses"
            />
          </div>
        </div>
      </div>

      {/* all services container */}
      <div className="w-11/12 mx-auto py-12">
        <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between md:items-center">
          <h3 className="text-xl md:text-3xl font-poppins font-medium text-primary pl-4 border-l-4 border-secondary">
            Total Course: {services.length}
          </h3>
          {/* search bar */}
          <label className="input flex items-center gap-2 border-2 border-secondary">
            <input
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="grow"
              placeholder="Search Course"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>

          {/* sorting filter */}
          <label className="border-2 border-secondary rounded-md">
            <select
              name="price"
              id="price"
              onChange={(e) => setSort(e.target.value)}
              value={sort}
              className="py-3 px-2 rounded-md"
            >
              <option value="">Sort By Price</option>
              <option value="dsc">Descending Order</option>
              <option value="asc">Ascending Order</option>
            </select>
          </label>
        </div>

        {/* all servics here */}
        <div className="space-y-5 md:space-y-8 my-12">
          {loading ? (
            <div className="flex justify-center items-center">
              <FaSpinner className="text-base md:text-lg lg:text-xl animate-spin" />
            </div>
          ) : (
            services.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default AllServices;
