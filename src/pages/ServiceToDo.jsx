import { useContext, useEffect, useState } from "react";
import ServiceToDoCard from "../components/ServiceToDoCard/ServiceToDoCard";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import PageTitle from "../components/shared/PageTitle";
import background from "../assets/allservicesBackground.png";
import courseIcon from "../assets/allServiceIcon.png";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { FaSpinner } from "react-icons/fa6";

const ServiceToDo = () => {
  const axiosSecure = useAxiosSecure();
  const [services, setServices] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllServices = async () => {
      setLoading(true); // Start loading
      try {
        const { data } = await axiosSecure.get(
          `/bookedServices/${user?.email}`
        );
        setServices(data);
      } catch (err) {
        console.log("Failed to fetch booked services", err);
      }
      setLoading(false);
    };

    fetchAllServices();
  }, [user]);

  return (
    <section>
      <PageTitle title={`Learn Link | Service To Do`} />
      {/* header part */}
      <div className="h-[200px] md:h-[300px] lg:h-[450px] overflow-hidden bg-secondary/20">
        <div className="w-11/12 mx-auto flex items-center justify-between">
          <div className="w-1/2 md:w-3/5 space-y-1 md:space-y-3">
            <h3 className="text-xl md:text-4xl lg:text-6xl font-semibold text-primary font-poppins">
              Course to conduct
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

      {/* service to do container */}
      <div>
        {services.length !== 0 && loading ? (
          <div className="flex justify-center items-center">
            <FaSpinner className="text-base md:text-lg lg:text-xl animate-spin" />
          </div>
        ) : (
          <div className="w-11/12 mx-auto py-12">
            <h3 className="text-xl md:text-3xl font-poppins font-medium my-8 pl-4 border-l-4 border-secondary">
              Total Course: {services.length}
            </h3>
            <div className="space-y-5 md:space-y-8 my-12">
              {services.map((service) => (
                <ServiceToDoCard key={service._id} service={service} />
              ))}
            </div>
          </div>
        )}
        {services.length === 0 && (
          <p className="text-2xl md:text-5xl font-bold flex justify-center items-center min-h-[400px]">
            No Available service to do!
          </p>
        )}
      </div>
    </section>
  );
};

export default ServiceToDo;
