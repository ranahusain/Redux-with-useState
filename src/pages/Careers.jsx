// import Feature from "../components/Feature";
// import details from "../../details.json";
// const Careers = () => {
//   return (
//     <>
//       <div className="px-100 pt-20 m-auto">
//         {details.map((detail) => (
//           <Feature key={detail.id} detail={detail} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default Careers;

import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Feature from "../components/Feature";
const Careers = () => {
  const [details, setDetails] = useState([]); // Should be array
  const [loading, setLoading] = useState(true); // Should be boolean

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetch("api/jobs");
        const data = await res.json(); // Add 'await' here
        setDetails(data);
      } catch (error) {
        console.log("error", error);
      } finally {
        //setLoading(false); Set loading to false when done
        setTimeout(() => {
          setLoading(false);
        }, 2000); // 2 seconds delay
      }
    };
    fetchDetails();
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <Spinner loading={loading} />
        </div>
      ) : (
        <div className="flex flex-col space-y-8 md:w-1/2 items-center m-auto mt-10">
          {details.map((detail) => (
            <Feature key={detail.id} detail={detail} />
          ))}
        </div>
      )}
    </>
  );
};

export default Careers;
