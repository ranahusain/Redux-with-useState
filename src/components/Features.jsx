// import details from "../../details.json";
// import { useState } from "react";
// import Feature from "./Feature";
// const Features = () => {
//   const recentdetail = details.slice(0, 2);
//   return (
//     <>
//       {/* <!-- Features Section  --> */}
//       <section id="features">
//         <div className="container flex flex-col mt-10 px-8 mx-auto space-y-12 md:space-y-0 md:flex-row">
//           {/* <!-- left section  --> */}
//           <div className="flex basis-4/10 ml-10 flex-col space-y-12 text-left md:wd-1/2">
//             <h2 className="max-w text-4xl font-bold text-center md:text-left">
//               What's different about Manage?
//             </h2>

//             <p className="max-w text-left text-gray-500">
//               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
//               fuga est incidunt maiores nobis quas! Lorem, ipsum dolor sit amet
//               consectetur adipisicing elit. Odit, praesentium et quod doloribus
//               minima illum? Lorem ipsum dolor sit amet consectetur adipisicing
//               elit. Unde aliquam sed exercitationem sint repellendus molestiae
//               praesentium! Dolor veniam reprehenderit dicta.
//             </p>
//           </div>

//           <div className="flex flex-col space-y-8 md:w-1/2 items-center">
//             {recentdetail.map((detail) => (
//               <Feature key={detail.id} detail={detail} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Features;

import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import Feature from "./Feature";
const Features = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetch("/api/jobs?_limit=2");
        const data = await res.json();
        setDetails(data);
      } catch (error) {
        console.log("error", error);
      } finally {
        // setLoading(false);
        setTimeout(() => {
          setLoading(false);
        }, 2000); // 2 seconds delay
      }
    };
    fetchDetails();
  }, []);

  return (
    <>
      {/* <!-- Features Section  --> */}
      <section id="features">
        <div className="container flex flex-col mt-10 px-8 mx-auto space-y-12 md:space-y-0 md:flex-row">
          {/* <!-- left section  --> */}
          <div className="flex basis-4/10 ml-10 flex-col space-y-12 text-left md:wd-1/2">
            <h2 className="max-w text-4xl font-bold text-center md:text-left">
              What's different about Manage?
            </h2>

            <p className="max-w text-left text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              fuga est incidunt maiores nobis quas! Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Odit, praesentium et quod doloribus
              minima illum? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Unde aliquam sed exercitationem sint repellendus molestiae
              praesentium! Dolor veniam reprehenderit dicta.
            </p>
          </div>

          {/* <div className="flex flex-col space-y-8 md:w-1/2 items-center">
            {details.map((detail) => (
              <Feature key={detail.id} detail={detail} />
            ))}
          </div> */}

          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <div className="flex flex-col space-y-8 md:w-1/2 items-center">
              {details.map((detail) => (
                <Feature key={detail.id} detail={detail} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Features;
