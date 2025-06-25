import { useState } from "react";
import { Link } from "react-router-dom";
const Feature = ({ detail }) => {
  const [showFullDescription, setFullDescription] = useState(false);
  let description = detail.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }

  return (
    <>
      <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
        <div className="rounded-l-full bg-red-200 md:bg-transparent">
          <div className="flex items-center space-x-2">
            <div className="px-4 py-2 text-white rounded-full md:py-1 bg-red-500">
              {detail.id}
            </div>
            <h3 className="text-base font-bold md:mb-4 md:hidden">
              Track Company-wide progress
            </h3>
          </div>
        </div>
        <div>
          <h3 className="hidden mb-4 text-lg font-bold md:block">
            {detail.title}
          </h3>
          <p className="text-gray-400">{description}</p>
          <button
            onClick={() => setFullDescription((prevState) => !prevState)}
            className="text-red-500 mb-5 hover:text-red-400 cursor-pointer"
          >
            {showFullDescription ? "Less" : "More"}
          </button>
          <br />
          <Link
            to={`/careers/${detail.id}`}
            className="text-white bg-red-500 hover:bg-red-400 hover:text-white p-2 px-5 pt-1 rounded-full baseline cursor-pointer"
          >
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default Feature;
