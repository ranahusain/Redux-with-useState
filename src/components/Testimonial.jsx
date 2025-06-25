import { Link } from "react-router-dom";
import { useState } from "react";
const Testimonial = () => {
  const [showMore1, setShowMore1] = useState(false);
  let text =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum reiciendis at quasi, tenetur corrupti similique commodi aspernatur? Odit unde velit fuga nemo quod fugiat, expedita    soluta, deserunt iste laborum ad?";

  return (
    <>
      {/* <!-- testimonial  --> */}

      <section>
        {/* <!-- container to heading and testimonial block  --> */}
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
          {/* <!-- headin  --> */}
          <h2 className="text-4xl font-bold text-center">
            What's Different About Manage?
          </h2>
          {/* <!-- testimonial container  --> */}
          <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
            {/* <!-- testimonial 1 --> */}
            <div className="flex flex-col mt-10 items-center p-6 space-y-6 rounded-lg bg-gray-100 md:w-1/3">
              <img
                src="./images/avatar-shanai.png"
                className="w-16 -mt-14"
                alt=""
              />
              <h5 className="text-lg text-gray-400">
                {showMore1 ? text : text.substring(0, 100)}
              </h5>
              <button
                onClick={() => setShowMore1((prev) => !prev)}
                className="text-red-500 hover:text-red-400 hunderline cursor-pointer"
              >
                {showMore1 ? "Show Less" : "Show More"}
              </button>
            </div>

            <div className="flex flex-col items-center p-6 space-y-6 mt-10 rounded-lg bg-gray-100 md:w-1/3">
              <img
                src="./images/avatar-shanai.png"
                className="w-16 -mt-14"
                alt=""
              />
              <h5 className="text-lg text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
                reiciendis at quasi, tenetur corrupti similique commodi
                aspernatur? Odit unde velit fuga nemo quod fugiat, expedita
                soluta, deserunt iste laborum ad?
              </h5>
            </div>

            <div className="flex flex-col items-center p-6 mt-10 space-y-6 rounded-lg bg-gray-100 md:w-1/3">
              <img
                src="./images/avatar-shanai.png"
                className="w-16 -mt-14"
                alt=""
              />
              <h5 className="text-lg text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
                reiciendis at quasi, tenetur corrupti similique commodi
                aspernatur? Odit unde velit fuga nemo quod fugiat, expedita
                soluta, deserunt iste laborum ad?
              </h5>
            </div>
          </div>
          <div className="my-16">
            <Link
              to="#"
              className="p-3 px-6 pt-2 text-white bg-red-500 rounded-full baseline hover:bg-red-400"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
