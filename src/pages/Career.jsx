import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Career = () => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        setDetails(data);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false); // remove setTimeout unless needed
      }
    };
    fetchDetails();
  }, [id]);

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/careers"
            className="text-red-500 hover:text-red-400 flex items-center"
          >
            <FaArrowLeft Back to Job Listings />
            Back to Job Listings
          </Link>
        </div>
      </section>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <Spinner loading={loading} />
        </div>
      ) : (
        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row md:w-1/2 items-center m-auto mt-10">
          <div className="rounded-l-full bg-red-200 md:bg-transparent">
            <div className="flex items-center space-x-2">
              <div className="px-4 py-2 text-white rounded-full md:py-1 bg-red-500">
                {details.id}
              </div>
              <h3 className="text-base font-bold md:mb-4 md:hidden">
                Track Company-wide progress
              </h3>
            </div>
          </div>
          <div>
            <h3 className="hidden mb-4 text-lg font-bold md:block">
              {details.title}
            </h3>
            <p className="text-gray-400">{details.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Career;
