import { FaArrowRight, FaBook, FaSpinner } from "react-icons/fa6";
import PopularServiceCard from "../PopularServiceCard/PopularServiceCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "motion/react";

const PopularServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAllServices = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/popularServices`
        );
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllServices();
  }, []);
  
  return (
    <div className="w-11/12 mx-auto py-10 space-y-5 md:space-y-14">
      {/* top section */}
      <div className="flex justify-between items-end">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.1,
          }}
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-2 md:space-y-4"
        >
          <div className="flex gap-1 md:gap-3 items-center">
            <FaBook className="text-secondary text-sm"></FaBook>
            <p className="uppercase tracking-widest font-poppins font-bold text-secondary text-xs md:text-sm">
              Course
            </p>
          </div>
          <h3 className="text-xl md:text-4xl font-poppins text-primary font-semibold">
            Popular Courses
          </h3>
        </motion.div>
        {/* view all button */}
        <Link to={`/allServices`}>
          <button className="btn bg-secondary text-primary hover:bg-transparent hover:text-primary border-transparent hover:border-primary md:text-base text-sm">
            Show All <FaArrowRight></FaArrowRight>
          </button>
        </Link>
      </div>

      {/* popular course container  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {loading ? (
          <div className="flex justify-center items-center">
            <FaSpinner className="text-base md:text-lg lg:text-xl animate-spin" />
          </div>
        ) : (
          services.map((service) => (
            <PopularServiceCard key={service._id} service={service} />
          ))
        )}
      </div>
    </div>
  );
};

export default PopularServices;
