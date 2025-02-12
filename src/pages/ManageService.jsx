import { useContext, useEffect, useState } from "react";
import courseIcon from "../assets/allServiceIcon.png";
import ManageServiceCard from "../components/ManageServiceCard/ManageServiceCard";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import PageTitle from "../components/shared/PageTitle";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { FaSpinner } from "react-icons/fa6";

const ManageService = () => {
  const axiosSecure = useAxiosSecure();
  const [services, setServices] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllServices();
  }, [user]);

  const fetchAllServices = async () => {
    setLoading(true);
    try {
      const { data } = await axiosSecure.get(
        `/my-added-services/${user?.email}`
      );
      setServices(data);
    } catch (err) {
      toast.error("Failed to fetch services");
    }
    setLoading(false);
  };

  //handle delete btn
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/service/${id}`);
      toast.success("Course Deleted Successfully!!!");
      fetchAllServices();
    } catch (err) {
      toast.error(err.message);
    }
  };

  //modern toast delete button
  const modernDelete = (id) => {
    toast((t) => (
      <div className="flex items-center gap-3">
        <div>
          <p>
            Are you <b>sure?</b>
          </p>
        </div>
        <div className="space-x-2">
          <button
            className="bg-red-400 text-white px-3 py-1 rounded-md"
            onClick={() => {
              toast.dismiss(t.id);
              handleDelete(id);
            }}
          >
            Yes
          </button>
          <button
            className="bg-green-400 text-white px-3 py-1 rounded-md"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };

  return (
    <section>
      <PageTitle title={`Learn Link | Manage Service`} />
      {/* header part */}
      <div className="h-[200px] md:h-[300px] lg:h-[450px] bg-secondary/20 overflow-hidden">
        <div className="w-11/12 mx-auto flex items-center justify-between">
          <div className="w-1/2 md:w-3/5 space-y-1 md:space-y-3">
            <h3 className="text-xl md:text-4xl lg:text-6xl font-semibold text-primary font-poppins">
              Manage Courses
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

      {/* manage service container */}
      <div className="my-12 w-11/12 mx-auto ">
        <h3 className="text-xl md:text-3xl font-poppins font-medium my-8 pl-4 border-l-4 border-secondary">
          My Added course: {services.length}
        </h3>
        <div className="space-y-8 md:space-y-10">
          {loading ? (
            <div className="flex justify-center items-center">
              <FaSpinner className="text-base md:text-lg lg:text-xl animate-spin" />
            </div>
          ) : (
            services.map((service) => (
              <ManageServiceCard
                modernDelete={modernDelete}
                key={service._id}
                service={service}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ManageService;
